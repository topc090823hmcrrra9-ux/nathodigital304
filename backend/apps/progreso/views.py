from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .constantes import ESTRELLAS_MAXIMAS, JUEGOS, NIVELES
from .models import Progreso
from .serializers import GuardarProgresoSerializer

NOMBRES_JUEGOS = dict(JUEGOS)
NOMBRES_NIVELES = dict(NIVELES)

def resumen_de_juego(usuario, juego):
    """Arma el resumen de UN juego para UN usuario:
    los 3 niveles con su estado (desbloqueado, completado, estrellas...).
    Si el jugador nunca ha jugado un nivel, sale en ceros.
    """
    registros = {p.nivel: p for p in Progreso.objects.filter(usuario=usuario, juego=juego)}

    niveles = []
    anterior_completado = True  # el nivel 1 siempre está desbloqueado
    for numero, nombre in NIVELES:
        p = registros.get(numero)
        niveles.append({
            'nivel': numero,
            'nombre': nombre,
            'desbloqueado': anterior_completado,
            'completado': p.completado if p else False,
            'estrellas': p.estrellas if p else 0,
            'mejor_puntaje': p.mejor_puntaje if p else 0,
            'veces_jugado': p.veces_jugado if p else 0,
        })
        # El siguiente nivel se abre solo si este ya se completó
        anterior_completado = bool(p and p.completado)

    return {
        'juego': juego,
        'nombre': NOMBRES_JUEGOS[juego],
        'niveles': niveles,
        'estrellas': sum(n['estrellas'] for n in niveles),
    }

def nivel_desbloqueado(usuario, juego, nivel):
    """El nivel 1 siempre; los demás, si el anterior está completado."""
    if nivel == 1:
        return True
    return Progreso.objects.filter(
        usuario=usuario, juego=juego, nivel=nivel - 1, completado=True
    ).exists()

class ProgresoView(APIView):
    """GET: resumen de todos los juegos - POST: guardar resultado de un nivel."""

    def get(self, request):
        juegos = [resumen_de_juego(request.user, clave) for clave, _ in JUEGOS]
        return Response({
            'juegos': juegos,
            'estrellas_totales': sum(j['estrellas'] for j in juegos),
            'estrellas_posibles': len(JUEGOS) * len(NIVELES) * ESTRELLAS_MAXIMAS,
        })

    def post(self, request):
        serializer = GuardarProgresoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)  # si algo viene mal, responde 400 con el error
        datos = serializer.validated_data
        juego, nivel = datos['juego'], datos['nivel']

        # Evita "saltarse" niveles mandando la petición a mano
        if not nivel_desbloqueado(request.user, juego, nivel):
            return Response(
                {'detail': f'El nivel {NOMBRES_NIVELES[nivel]} de {NOMBRES_JUEGOS[juego]} todavía está bloqueado.'},
                status=status.HTTP_403_FORBIDDEN,
            )

        # Para saber si este resultado abrió un nivel nuevo
        ya_estaba_completado = Progreso.objects.filter(
            usuario=request.user, juego=juego, nivel=nivel, completado=True
        ).exists()

        # Busca el registro; si no existe, lo crea
        progreso, _ = Progreso.objects.get_or_create(usuario=request.user, juego=juego, nivel=nivel)

        # Solo se guarda lo MEJOR: jugar mal después no borra un buen resultado anterior
        progreso.veces_jugado += 1
        progreso.mejor_puntaje = max(progreso.mejor_puntaje, datos['puntaje'])
        progreso.estrellas = max(progreso.estrellas, datos['estrellas'])
        progreso.completado = progreso.completado or datos['completado']
        progreso.save()

        nuevo_nivel = None
        if datos['completado'] and not ya_estaba_completado and nivel < len(NIVELES):
            nuevo_nivel = nivel + 1

        return Response({
            'mensaje': 'Progreso guardado!',
            'nivel_desbloqueado': nuevo_nivel,  # ej. 2 si se acaba de abrir el nivel Medio
            'resumen': resumen_de_juego(request.user, juego),
        }, status=status.HTTP_200_OK)

class ProgresoJuegoView(APIView):
    """GET /api/progreso/<juego>/ -> resumen de un solo juego."""

    def get(self, request, juego):
        if juego not in NOMBRES_JUEGOS:
            return Response({'detail': 'Ese juego no existe.'}, status=status.HTTP_404_NOT_FOUND)
        return Response(resumen_de_juego(request.user, juego))
    
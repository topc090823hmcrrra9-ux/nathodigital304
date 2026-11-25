
from rest_framework import serializers

from .constantes import ESTRELLAS_MAXIMAS, JUEGOS, NIVELES

class GuardarProgresoSerializer(serializers.Serializer):
    juego = serializers.ChoiceField(choices=JUEGOS)
    nivel = serializers.ChoiceField(choices=NIVELES)
    puntaje = serializers.IntegerField(min_value=0, max_value=100000)
    estrellas = serializers.IntegerField(min_value=0, max_value=ESTRELLAS_MAXIMAS)
    completado = serializers.BooleanField()

    def validate(self, datos):
        # No tiene sentido "pasar" un nivel con 0 estrellas, ni tener estrellas sin pasarlo
        if datos['completado'] and datos['estrellas'] == 0:
            raise serializers.ValidationError('Un nivel completado debe tener al menos 1 estrella.')
        if not datos['completado'] and datos['estrellas'] > 0:
            raise serializers.ValidationError('Un nivel no completado no puede tener estrellas.')
        return datos
    
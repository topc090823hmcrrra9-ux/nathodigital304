from django.contrib import admin
from .models import Progreso

# Register your models here.
@admin.register(Progreso)
class ProgresoAdmin(admin.ModelAdmin):
    list_display=('usuario','juego','completado','estrellas','mejor_puntaje','veces_jugado','actualizado')
    list_filter=('juego','nivel','completado')
    search_fields=('usuario_username','usuario_firts_name')
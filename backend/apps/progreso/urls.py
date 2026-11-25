from django.urls import path

from .views import ProgresoJuegoView, ProgresoView

urlpatterns = [
    path('', ProgresoView.as_view(), name='progreso'),
    path('<str:juego>/', ProgresoJuegoView.as_view(), name='progreso-juego'),
]
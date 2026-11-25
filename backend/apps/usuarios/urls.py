from django.urls import path

from .views import LoginView, LogoutView, RegistroView, YoView

urlpatterns = [
    path('registro/', RegistroView.as_view(), name='registro'),
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(), name='logout'),
    path('yo/', YoView.as_view(), name='yo'),  
]
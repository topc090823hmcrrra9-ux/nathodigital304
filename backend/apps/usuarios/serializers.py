from django.contrib.auth import authenticate, get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers

User = get_user_model()


class UsuarioSerializer(serializers.ModelSerializer):
    """Datos públicos del jugador que se mandan al frontend."""

    usuario = serializers.CharField(source='username')  # Fixed typo: username
    nombre = serializers.CharField(source='first_name')

    class Meta:
        model = User
        fields = ['id', 'usuario', 'nombre']


class RegistroSerializer(serializers.Serializer):
    nombre = serializers.CharField(max_length=60)
    usuario = serializers.RegexField(
        regex=r'^[a-zA-Z0-9_.]{3,30}$',
        error_messages={'invalid': 'Usa de 3 a 30 sin acentos, números, punto o guión bajo.'},  # Fixed typo: error_messages
    )
    password = serializers.CharField(write_only=True)
    password2 = serializers.CharField(write_only=True)

    def validate_usuario(self, valor):
        if User.objects.filter(username__iexact=valor).exists():  # Fixed syntax: username__iexact
            raise serializers.ValidationError('Ese nombre de usuario ya está ocupado.')
        return valor

    def validate(self, datos):
        if datos['password'] != datos['password2']:  # Fixed typo: removed stray '´' backtick
            raise serializers.ValidationError({'password2': 'Las contraseñas no coinciden.'})

        # Reglas de settings.py (mínimo 6 caracteres, no solo números)
        validate_password(datos['password'])
        return datos

    def create(self, datos):
        # create_user CIFRA la contraseña (nunca se guarda en texto plano)
        return User.objects.create_user(
            username=datos['usuario'],
            first_name=datos['nombre'],
            password=datos['password'],
        )


class LoginSerializer(serializers.Serializer):
    usuario = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, datos):
        user = authenticate(username=datos['usuario'], password=datos['password'])
        if user is None:
            raise serializers.ValidationError('Usuario o contraseña incorrectos.')
        datos['user'] = user
        return datos
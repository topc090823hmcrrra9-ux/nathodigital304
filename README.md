README.md

Plataforma Educativa sobre la lengua otomí y su cultura de la comunidad de las Moras.
Proyecto integradaor de la carrera de programacion 3er Semestre grupo 304.

- Pagina principal*Videojuegos*Las 6 casas de resguardo*Lecciones interactivas.

# Tecnologias

- Backend: Django + Django REST Framework (carpeta backend/)
- Frontend: React + Vite (carpeta frontend/)

# Instalacion del backend

cd backend
python -m venv env
.env\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env #y llenar los valores
python manage.py migrate
python manage.py runserver

# Instalacion de frontend

cd frontend
npm install
copy .env.example .env
npm run dev

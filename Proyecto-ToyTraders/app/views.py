from django.shortcuts import render

# Create your views here.

def pagprincipal(request):
    return render(request, 'app/pagprincipal.html')

def productos(request):
    return render(request, 'app/productos.html')

def producto(request):
    return render(request, 'app/producto.html')

def login(request):
    return render(request, 'app/login.html')

def carrito(request):
    return render(request, 'app/carrito.html')
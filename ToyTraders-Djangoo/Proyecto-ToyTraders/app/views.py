from django.db import models

# Create your models here.
class Genero(models.Model):
    id_Genero   = models.AutoField(db_column='idGenero', primary_key=True)
    genero      = models.CharField(max_length=20, blank=False, null=False)

def __str__(self):
        return str(self.genero)

class Producto(models.Model):
    id          = models.AutoField(primary_key=True)
    nombre      = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=500)
    precio      = models.DecimalField(max_digits=10, decimal_places=2)
    foto        = models.ImageField(upload_to="ToyTraders", null=True)
    id_genero   = models.ForeignKey('Genero',on_delete=models.CASCADE, db_column='idGenero')
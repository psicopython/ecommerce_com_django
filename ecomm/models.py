from django.db import models


class Produtos(models.Model):

    nome = models.CharField(max_length=200)
    preco = models.DecimalField(max_digits=10,decimal_places=2)
    img = models.BinaryField()

    def __str__(self):
        return self.nome

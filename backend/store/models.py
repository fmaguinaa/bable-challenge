from django.db import models

class Book(models.Model):
  title = models.CharField(max_length=250)
  slug = models.CharField(max_length=250)
  price = models.FloatField()

class Category(models.Model):
  name = models.CharField(max_length=50)
  created_date = models.DateTimeField(auto_now_add=True, blank=True)
  def __str__(self):
    return f'{self.name}'

class Magazines(models.Model):
  title = models.CharField(max_length=250)
  resume = models.CharField(max_length=1000)
  pub_date = models.DateTimeField(auto_now_add=True, blank=True)
  url_image_cover = models.CharField(max_length=500)
  category = models.ForeignKey(Category, on_delete=models.CASCADE)
  
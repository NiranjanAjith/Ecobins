# Generated by Django 5.0 on 2023-12-23 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('autho', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='phone',
            new_name='Phone',
        ),
        migrations.RemoveField(
            model_name='user',
            name='address',
        ),
        migrations.RemoveField(
            model_name='user',
            name='age',
        ),
        migrations.RemoveField(
            model_name='user',
            name='id',
        ),
        migrations.RemoveField(
            model_name='user',
            name='name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='user',
        ),
        migrations.AddField(
            model_name='user',
            name='Email',
            field=models.EmailField(default='example@gmail.com', max_length=254),
        ),
        migrations.AddField(
            model_name='user',
            name='Password',
            field=models.CharField(default='ertyuiop', max_length=255),
        ),
        migrations.AddField(
            model_name='user',
            name='UserID',
            field=models.AutoField(default='0', primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='Username',
            field=models.CharField(default='admin', max_length=255),
            preserve_default=False,
        ),
    ]
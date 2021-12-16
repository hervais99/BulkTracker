# Generated by Django 3.2.9 on 2021-12-03 23:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('bulkFiber', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Az',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('az_name', models.CharField(max_length=15, verbose_name='AZ Name')),
            ],
        ),
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region_name', models.CharField(max_length=25, verbose_name='Region Name')),
                ('country', models.CharField(max_length=25, verbose_name='Country Name')),
            ],
        ),
        migrations.RemoveField(
            model_name='datahall',
            name='dh_site_code',
        ),
        migrations.CreateModel(
            name='Site',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('site_name', models.CharField(max_length=15, verbose_name='Site Name')),
                ('site_az', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='siteAz', to='bulkFiber.az', verbose_name='Az')),
            ],
        ),
        migrations.CreateModel(
            name='Cluster',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cluster_name', models.CharField(max_length=10, verbose_name='cluster Name')),
                ('c_region', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='clusterRegion', to='bulkFiber.region', verbose_name='Region')),
            ],
        ),
        migrations.AddField(
            model_name='az',
            name='az_cluster',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='azCluster', to='bulkFiber.cluster', verbose_name='Cluster'),
        ),
        migrations.AddField(
            model_name='datahall',
            name='dh_site',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='DhSite', to='bulkFiber.site', verbose_name='Site'),
        ),
    ]

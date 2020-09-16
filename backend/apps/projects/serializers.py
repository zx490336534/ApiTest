from rest_framework import serializers
from .models import Projects
from debugtalks.models import DebugTalks
from interfaces.models import Interfaces


class ProjectModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        exclude = ('update_time', 'is_delete')

        extra_kwargs = {
            'create_time': {
                'read_only': True
            }
        }

    def create(self, validated_data):
        project_obj = super().create(validated_data)
        DebugTalks.objects.create(project=project_obj)

        return project_obj


class ProjectNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('id', 'name')


class InterfaceNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interfaces
        fields = ('id', 'name', 'tester')


class InterfacesByProjectIdSerializer(serializers.ModelSerializer):
    interfaces_set = InterfaceNameSerializer(read_only=True, many=True)

    class Meta:
        model = Projects
        fields = ('id', 'interfaces_set')

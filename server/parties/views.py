from django.db.models import Count
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions
from rest_framework.exceptions import ValidationError
from rest_framework.generics import ListAPIView, get_object_or_404, RetrieveAPIView
from rest_framework.views import APIView

from .models import Parties
from .serializers import PartiesSerializer, PartyPricesSerializer


# Create your views here.
class PartyListAPIView(ListAPIView):
    queryset = Parties.objects.annotate(reg_counted=Count("ghosts"))
    serializer_class = PartiesSerializer
    permission_classes = [permissions.AllowAny]

class PartyDetailAPIView(RetrieveAPIView):
    queryset = Parties.objects.prefetch_related('prices').all()
    serializer_class = PartiesSerializer
    permission_classes = [permissions.AllowAny]



class JoinPartyAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PartiesSerializer
    def post(self, request, *args, **kwargs):
        party = get_object_or_404(Parties, pk=kwargs["pk"])
        user=request.user

        if party.ghosts.filter(id=user.id).exists():
            raise ValidationError({"detail": "Are you already in party"})

        party.ghosts.add(user)
        return Response({"detail": "success Joined to party"}, status=status.HTTP_200_OK)



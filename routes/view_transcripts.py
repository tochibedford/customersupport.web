from typing import Union, List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import services as _services
from .. import Audio

transcript_router = APIRouter(
    prefix="view_transcripts",
    tags=["TRANSCRIPTION"]
)

""" Please Note that these endpoints are subject to change as the query would be better suited to retrieve transcripts from the transcript table by transcript_id and
    not Audio by audio_id.
    If the transcript table is available, the code will be refractored to implement changes and queries to the transcript table """

# ENDPOINT TO GET A PARTICULAR TRANSCRIPT USING THE AUDIO ID
@transcript_router.get("/{id}", response_model=schemas.Audio, description="Retrieving transcript by audio ID")
def view_transcript(id: Union[int, str], db: Session = Depends(_services.get_session)):
    transcript_audio = db.query(models.Audio).filter(models.Audio.id == id).first()
    transcript_text = transcript_audio.transcript
    return transcript_text


#ENDPOINT TO GET ALL TRANSCRIPTS AS A LIST
@transcript_router.get("/", response_model=List[schemas.Audio], description="Retrieve all Transcripts")
def get_transcripts(db: Session = Depends(_services.get_session), limit : int = 0, skip: int = 0, ):
    transcripts = db.query(models.Audio).filter(models.Audio.transcript).limit(limit).offset(skip).all()
    return transcripts
import React from "react";

export const AboutUs = () => {
  return (
    <div className="home">
           <img src="https://scontent.fosl4-2.fna.fbcdn.net/v/t1.15752-9/297049970_948898449841581_3182713427378061223_n.jpg?_nc_cat=100&cb=99be929b-59f725be&ccb=1-7&_nc_sid=ae9488&_nc_ohc=uXwXhUGOUAcAX8mkH6J&_nc_ht=scontent.fosl4-2.fna&oh=03_AdSeJvO1eROiSIPVsyG0RYpyWH228f8pA-gtVxL6Djg1fw&oe=64A42D3C"
          height="600px" class="center"/>
    </div>
  );
};

export const OurAim = () => {
  return (
      <>
    <div className="home" class="center">
      <h1>Påmelding</h1>

    </div>

    <div class="center">
      <h3>
        Send e-post med lagnavn og deltagere (maks. 4) til ildsjelen@gkgk.no
        </h3>
      </div>
    </>
  );
};

export const OurVision = () => {
  return (
    <>
      <div className="home" class="center">
        <h1>Regler</h1>
      </div>
      <div class="center">
        <h3>
          Scramble er en lagkonkurranse hvor alle på laget spiller fra det sted
          hvor den beste ballen ligger, etter at alle har spilt. Hvert lag
          består av to, tre eller fire spillere. Samtlige spillere slår hver sin
          ball fra utslagsstedet. Deretter velger laget den best plasserte
          ballen.
        </h3>
      </div>
    </>
  );
};

export const EtcInfo = () => {
  return (
      <>
    <div className="home" class="center">
      <h1>Info</h1>
    </div>

      <div class="center">
      <h3>
        Tee time: ??:??
        </h3>
        <h3>
            Dato: ??:??:2023
        </h3>
        <h3>
            Pils: Ja
        </h3>
        <h3>
            Premier: Elling fiksar rør frå Rørservice, Jens fiksar plastplate frå Formvac, Sondre fiksar en stol eller to frå Slettvol.
        </h3>
      </div>
      </>
  );
};

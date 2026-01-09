import React from "react";

const App: React.FC = () => {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <h1>Azur Dance Studio</h1>
          <p className="tagline">
            Școală de dans dedicată copiilor, adolescenților și adulților
          </p>
        </div>
      </header>

      <main id="main">
        {/* HERO / INTRO */}
        <section className="hero">
          <div className="container">
            <h2>Descoperă bucuria dansului la Azur Dance Studio</h2>
            <p>
              Azur Dance Studio este mai mult decât o școală de dans. Este un
              spațiu în care mișcarea, muzica și disciplina se îmbină armonios
              pentru a crea experiențe memorabile. Indiferent dacă îți dorești
              să înveți să dansezi pentru plăcerea personală, pentru competiții
              sau pentru a-ți dezvolta copilul într-un mod sănătos și creativ,
              la Azur Dance Studio vei găsi un mediu sigur, profesionist și
              prietenos.
            </p>
            <p>
              Credem cu tărie că dansul este una dintre cele mai complete forme
              de educație fizică și emoțională. Prin dans, copiii își dezvoltă
              coordonarea, atenția și încrederea în sine, iar adulții descoperă
              o metodă eficientă de relaxare, socializare și menținere a
              sănătății.
            </p>
          </div>
        </section>

        {/* DESPRE NOI */}
        <section className="about">
          <div className="container">
            <h2>Despre Azur Dance Studio</h2>
            <p>
              Azur Dance Studio a fost fondată din pasiunea pentru dans și din
              dorința de a crea o comunitate în care fiecare cursant să se simtă
              apreciat și susținut. De-a lungul anilor, am lucrat cu sute de
              cursanți, de la copii aflați la prima lor experiență de dans până
              la adulți care au dorit să își perfecționeze stilul sau să
              participe la competiții.
            </p>
            <p>
              Instructorii noștri sunt profesioniști certificați, cu experiență
              atât în dans sportiv, cât și în pedagogie. Punem accent pe tehnică
              corectă, dar și pe plăcerea de a dansa, adaptând fiecare curs la
              nivelul și obiectivele grupei.
            </p>
            <p>
              Fiecare lecție este construită cu grijă pentru a îmbina exercițiile
              tehnice cu momente de creativitate și expresivitate. Astfel,
              cursanții nu doar că învață pașii corecți, ci își dezvoltă și
              capacitatea de a transmite emoții prin mișcare.
            </p>
          </div>
        </section>

        {/* CURSURI */}
        <section className="courses">
          <div className="container">
            <h2>Cursurile noastre de dans</h2>

            <h3>Cursuri de dans pentru copii</h3>
            <p>
              Cursurile pentru copii sunt concepute pentru a sprijini dezvoltarea
              armonioasă a celor mici. Prin jocuri de mișcare, exerciții ritmice
              și coregrafii adaptate vârstei, copiii își dezvoltă coordonarea,
              postura și simțul ritmic. În plus, dansul contribuie la creșterea
              încrederii în sine și la îmbunătățirea abilităților sociale.
            </p>

            <h3>Cursuri de dans pentru adolescenți</h3>
            <p>
              Adolescența este o perioadă de transformare, iar dansul poate fi
              un instrument excelent pentru exprimarea emoțiilor și pentru
              menținerea unei stări de echilibru. Oferim cursuri structurate,
              adaptate nivelului fiecărui participant, cu accent pe tehnică,
              disciplină și exprimare artistică.
            </p>

            <h3>Cursuri de dans pentru adulți</h3>
            <p>
              Indiferent dacă nu ai mai dansat niciodată sau dacă ai experiență,
              cursurile pentru adulți sunt create pentru a fi accesibile și
              eficiente. Dansul este o modalitate excelentă de a reduce stresul,
              de a îmbunătăți condiția fizică și de a cunoaște oameni noi.
            </p>
          </div>
        </section>

        {/* BENEFICII */}
        <section className="benefits">
          <div className="container">
            <h2>Beneficiile dansului</h2>
            <p>
              Dansul aduce beneficii semnificative atât pentru corp, cât și
              pentru minte. Prin participarea constantă la cursuri, cursanții
              își îmbunătățesc postura, mobilitatea și rezistența fizică.
            </p>
            <p>
              Din punct de vedere emoțional, dansul ajută la reducerea anxietății,
              crește nivelul de energie și contribuie la o stare generală de
              bine. Este o activitate completă, care îmbină mișcarea, muzica și
              interacțiunea socială.
            </p>
            <p>
              La Azur Dance Studio, promovăm un stil de viață activ și sănătos,
              adaptat nevoilor fiecărei vârste.
            </p>
          </div>
        </section>
		
           import { OptimizedImage } from "./components/OptimizedImage";

          <OptimizedImage
            name="hero"
            alt="Azur Dance Studio – cursuri de dans pentru copii și adulți"
            width={1600}
            height={900}
            priority
          />


        {/* DE CE NOI */}
        <section className="why-us">
          <div className="container">
            <h2>De ce să alegi Azur Dance Studio</h2>
            <p>
              Alegerea unei școli de dans este o decizie importantă. La Azur
              Dance Studio, ne diferențiem prin atenția acordată fiecărui
              cursant, prin profesionalismul instructorilor și prin atmosfera
              prietenoasă pe care o cultivăm.
            </p>
            <p>
              Grupele noastre sunt mici, ceea ce permite instructorilor să ofere
              feedback personalizat și să urmărească progresul fiecărui
              participant. Ne adaptăm constant metodele de predare pentru a
              răspunde nevoilor reale ale cursanților.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact">
          <div className="container">
            <h2>Contactează-ne</h2>
            <p>
              Dacă îți dorești să afli mai multe despre cursurile noastre sau să
              programezi o ședință de probă, te invităm să ne contactezi. Echipa
              Azur Dance Studio este aici pentru a răspunde tuturor întrebărilor
              tale și pentru a te ajuta să faci primul pas către lumea dansului.
            </p>
            <p>
              Primul curs este gratuit, pentru ca tu să poți descoperi atmosfera
              și stilul nostru de predare fără nicio obligație.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Azur Dance Studio. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
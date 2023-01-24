#Per far partire l'applicazione: Nel terminale fare questi comandi in ordine:

npm i
npm install -D json-server json-server-auth
npm install @schematics/angular --save-dev
npm install @auth0/angular-jwt
npm i concurrently
npm run full-stack


GUEST HOUSE case vacanze

Guest House è una piattaforma di annunci di case vacanze realizzata in angular:

ho diviso la deadline in più fasi:

ANALISI
Mi sono ispirato ad airbnb come concept aziendale ma ho seguito una struttura in stile subito.it che è molto più semplice e snella

DESIGN
realizzazione del logo e definizione della palette colori
successivamente ho creato un mockup del sito utilizzando boostrap e fontawesone 

LOGICA
Implementazione delle features :

{premessa: poiché non sono riuscito a trovare un API completa ho diviso il lavoro in questo modo}

Ho creato un’area riservata dove l’utente una volta registrato può creare, visualizzare, modificare e cancellare i suoi annunci.
(per questa feature ho usato un database locale con json server) ho inoltre implementato JWT per per proteggere attraverso un TOKEN i dati dell’utente.
Ho creato sempre all’interno del db locale una serie di articoli da stampare in home page per creare una sezione blog e all’interno di ogni articolo ho creato una sidebar dove mi sono riportato il loop di tutti gli articoli
Senza ombra di dubbio la parte più importante del progetto è la sezione CASE VACANZE dove ho creato un listato di annunci attraverso una chiamata API che ho trovato su rapidapi.com che mi ha permesso di fare una ricerca per città che poi ho filtrato tramite un modulo di ricerca passando dei parametri 

in questo progetto ho usato più o meno tutte le tecnologie che ho appreso durante il corso quindi service, interface, guard, interceptor , property binding, reactive form, driven form, routing, operazioni di CRUD (create, read, update delete).

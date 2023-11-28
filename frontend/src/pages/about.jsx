import React from 'react'
import { Book } from 'tabler-icons-react'


const About = () => {
  return (
<div className="flex w-full flex-col items-center justify-center rounded-lg border border-gray-200 p-8">    
  <div>  

  <Book color="teal" size={32} />
  </div>    
  <div className="mt-8 text-center">      
    <h1 className="text-4xl">RODAR Y RODAR</h1>
    <br />
	<h2>QUIENES SOMOS</h2>
     <p className="mx-auto mt-4 lg:w-1/2 text-gray-500">
       La productora de cine y televisión Rodar y Rodar, se fundó hace más de 30 años. En la actualidad, la empresa dirigida por Joaquín Padró y Mar Targarona, junto con sus hijos Marina y Daniel Padró, se ha convertido en una de las productoras con mayor solidez dentro de la industria audiovisual española. Su filmografía está avalada por grandes títulos como El Orfanato, El Cuerpo, El Fotógrafo de Mauthausen o Elisa y Marcela. 
       Pero la filmografía de Rodar y Rodar no se limita sólo a estos últimos títulos. Si bien en sus inicios la productora se dedicó a la publicidad con excelentes resultados, (140 premios nacionales e internacionales y la primera productora española en obtener el prestigioso galardón Gran Prix de Cannes), poco a poco se adentró en el mundo del cine y la televisión.
     </p>
	 <br />
     <h2>JOAQUIN PADRÓ</h2>
       <p className="mx-auto mt-4 lg:w-1/2 text-gray-500">
       Joaquín Padró, es productor.  Graduado en Cine-Tv y antropología por la Universidad de “San Francisco State Unniversity” y “Berkeley University”.  
       Fundador y responsable de “Magus Films”, productora de publicidad en San Francisco, California.  Presidente de “Movieland”, productora de Publicidad en Barcelona. Presidente de “Rodar y Rodar”, productora de Publicidad, Cine y T.V. desde esta compañía ha producido numerosos spots publicitarios que han obtenido el reconocimiento internacional y ha ganado numerosos premios, entre ellos el prestigioso Grand Prix de Cannes. Desde hace más de 30 años “Rodar y Rodar Cine” se ha convertido en una de las productoras con mayor solidez dentro de la industria audiovisual, especializándose en la producción de ficción para cine y televisión.
       </p>
	   <br />
     <h2>MAR TARGARONA</h2>
       <p className="mx-auto mt-4 lg:w-1/2 text-gray-500">
       Mar Targarona es directora, productora de cine y actriz. Es directora de la Fundación Taller de Guionistas y productora ejecutiva de Rodar y Rodar Cine S.L.
       Estudió Arte dramático en el “Institut del Teatre” de Barcelona, en Estrasburgo y con Lee Strasberg, e inició su carrera profesional en el teatro. Fue miembro Fundador de la compañía “Dagoll Dagom”. Más tarde se decantó por el mundo cinematográfico y de la televisión, realizando spots publicitarios para Rodar y Rodar y, a partir de 1995, trabajando como directora, guionista y productora.
       Dirigió la película Muere mí vida, un capítulo de la serie Abuela de Verano, Ojo por Ojo, Secuestro, El Fotógrafo de Mauthausen, Dos y El Cuco.
		</p>
    <br />
      <h2>MARINA PADRÓ</h2>
      <p className="mx-auto mt-4 lg:w-1/2 text-gray-500">•	Marina, Estudió en ESCAC (Escola Superior de Cinema i Audiovisual de Catalunya)
Tras licenciarse en Producción se trasladó a Madrid para trabajar en National Geographic Channel hasta 2012 cuando volvió a Barcelona y empezó a trabajar en Rodar y Rodar.
Primero en administración y productora asociada hasta que en 2019 trajo a la compañía el proyecto EL PÁRAMO. Desde entonces, Marina junto con Daniel, se hicieron cargo de la adquisición y producción de guion.
</p>
<br />
    <h2>DANIEL PADRÓ</h2>
    <p className="mx-auto mt-4 lg:w-1/2 text-gray-500">
    •	Daniel Padró comenzó su carrera como guionista con la película "Paranormal Xperience 3D" mientras cursaba sus estudios en la ESCAC, donde se especializó en guión. Su cortometraje "Un día Especial", su proyecto final de carrera se estrenó en el Festival de Cine de Sitges. Desde entonces se desempeña como analista y supervisor de Guión en la productora Rodar y Rodar. También ha dirigido otros cortometrajes de bajo presupuesto. En la película "Espejo Espejo" actuó como productor delegado.
    </p>
    </div>    
    <button className="mt-8 block rounded-lg border border-green-700 bg-green-600 py-1.5 px-4 font-medium text-white transition-colors hover:bg-green-700 active:bg-green-800 disabled:opacity-50">Volver</button>

  </div>
  
   )
}

export default About
const addEvents = () => {
        let data = [
            {
                "id": 0,
                "imgs": ["Prohibido aburrirse_1.jpg", "Prohibido aburrirse_3.jpg", "Prohibido aburrirse_2.jpg", "Prohibido aburrirse_4.jpg"],
                "nombre": "Prohibido aburrirse",
                "nombrest": "Prohibido aburrirse",
                "tags": ["Diseño editorial", "Ilustración", "Profesional"],
                "year": 2025,
                "subtitulo": `Maquetación e ilustración de cubierta e interiores del libro infantil escrito por Laura Vila y publicado por <a href="https://www.esferalibros.com" target="_blank">La Esfera de los Libros</a>`,
                "descripcion": `Este libro, <a href="https://www.esferalibros.com/libros/prohibido-aburrirse/" target="_blank">ya a la venta</a>, consiste en una serie de actividades propuestas a los lectores, niños de menos de diez años. Con esto en mente, la maquetación y las ilustraciones buscan sorprender y divertir, haciendo las páginas atractivas para los niños pese al blanco y negro.`
            },
            {
                "id": 1,
                "imgs": [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1076905337?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="uboot"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`, "uboot_1.jpg", "uboot_2.jpg", "uboot_3.jpg"],
                "nombre": "uboot",
                "nombrest": "uboot",
                "tags": ["Diseño de marca", "Diseño web", "Diseño audiovisual", "Académico"],
                "year": 2025,
                "subtitulo": "Diseño de identidad de marca para una empresa ficticia centrada en VPN",
                "descripcion": "Se trata de afrontar la contradicción que supone transmitir la privacidad que quiere alcanzar el cliente al tiempo que se promociona una marca. Se resuelve mediante un naming —que tiene su origen en la palabra alemana para “submarino”— y una gráfica que giran entorno a lo oculto. Para las aplicaciones se prioriza el mundo digital, por ser el ámbito en el que se usa el servicio y la principal vía de conexión con el público objetivo —adultos de hasta 35 años—."
            },
            {
                "id": 2,
                "imgs": [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1076913595?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="El poder de la música"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`],
                "nombre": "El poder de la música",
                "nombrest": "El poder de la musica",
                "tags": ["Motion graphics", "Académico"],
                "year": 2025,
                "subtitulo": "Animación realizada por rotoscopia sobre la capacidad de la música para despejar la mente",
                "descripcion": "Con el objetivo de conocer la técnica de la rotoscopia, se plantea un guión para una pieza de unos diez segundos. Se propone mostrar cómo la música puede despertar emociones muy fuertes, ayudando a gestionar distintas situaciones. A continuación, tras elegir la canción a usar —«How to disappear completely», del grupo Radiohead—,  se graban los planos necesarios ya siguiendo el pulso de la canción, detalle que facilita el posterior montaje. Se alterna entre After Effects y Procreate a conveniencia para dibujar a un personaje que se ve envuelto en todo tipo de estímulos negativos que terminan en el momento en que se pone los auriculares. Mientras los primeros cambios de plano introducen la variación suficiente como para no perder la atención del espectador al tiempo que presentan al protagonista, la desaparición de los garabatos y la inversión de los colores demuestran que los problemas han quedado atrás con la música."
            },
            {
                "id": 3,
                "imgs": ["Acto Reflejo + Around_1.jpg"],
                "nombre": "Acto Reflejo + Around",
                "nombrest": "Acto Reflejo + Around",
                "tags": ["Diseño editorial", "Personal"],
                "year": 2025,
                "subtitulo": "Cartel para un concierto de ambas bandas en la sala Barracudas Rock Bar",
                "descripcion": "Realizado en colaboración con Manuel Quintana, el cartel remite al error digital y al mundo de la noche. Mientras que la repetición de las Os genera movimiento y ayuda a conectar los nombres de ambas bandas, el desplazamiento de canales alude al efecto de sustancias consumidas por el protagonista de una de las canciones que se pudieron escuchar en el concierto, quien, volviendo a casa después de una noche de fiesta, cruza un paso a nivel y se plantea saltar a la carretera."
            },
            {
                "id": 4,
                "imgs": ["Mi musica_1.jpg", "Mi musica_2.jpg"],
                "nombre": "Mi música",
                "nombrest": "Mi musica",
                "tags": ["Diseño web", "Académico"],
                "year": 2025,
                "subtitulo": "Biblioteca musical en web realizada con HTML, Sass y JavaScript",
                "descripcion": "Diseño de página web que permite poner en práctica todo lo aprendido hasta el momento de JavaScript, especialmente el pintado de datos y la capacidad para reconocer en qué elemento hace click el usuario entre muchos iguales. De esta forma, se puede actualizar en el momento la lista de favoritos al pulsar en la estrella que tiene cada disco o abrir un desplegable con más información pulsando en su portada. La página, hecha con HTML y Sass —Css—, es responsive, adaptando la retícula según el ancho de la pantalla y modificando las interacciones de hover para adaptarlas a los móviles —donde no es posible pasar por encima un cursor—."
            },
            {
                "id": 5,
                "imgs": ["Teatros del Canal_1.jpg", "Teatros del Canal_2.jpg", "Teatros del Canal_3.jpg", "Teatros del Canal_4.jpg"],
                "nombre": "Teatros del Canal",
                "nombrest": "Teatros del Canal",
                "tags": ["Diseño de marca", "Diseño web", "Diseño audiovisual", "Diseño editorial", "Académico"],
                "year": 2025,
                "subtitulo": "Rediseño de identidad de marca para Teatros del Canal, uno de los principales centros culturales de Madrid",
                "descripcion": "Se busca plasmar en la gráfica la forma en que TdC da cabida a todo tipo de espectáculos. Para ello, se apoya en el concepto de escenario, que se traduce en un cuadrado presente en el isologo. \nAdemás de los identificadores visuales, se desarrolla un sistema gráfico que da especial importancia a unos patrones geométricos. Estos sirven para identificar las distintas salas del edificio y tienen su origen en la arquitectura de las mismas."
            },
            {
                "id": 6,
                "imgs": ["Memoria selectiva_1.jpg", "Memoria selectiva_2.jpg", "Memoria selectiva_3.jpg", "Memoria selectiva_4.jpg"],
                "nombre": "Memoria selectiva",
                "nombrest": "Memoria selectiva",
                "tags": ["Diseño editorial", "Académico"],
                "year": 2025,
                "subtitulo": "Libreto para el disco «Memoria Selectiva» —aún por ser publicado— de la banda Acto Reflejo",
                "descripcion": "Esta publicación ejerce de libreto para el disco al tiempo que sirve como muestrario de todo lo aprendido en la asignatura Sistemas de Reproducción e Impresión —centrada en las artes finales—. Cada canción es maquetada en una o dos dobles páginas, pisando siempre el texto a una imagen tratada para plasmar y completar aquello que transmite la canción al tiempo que demuestra el dominio en la forma en que estas imágenes deben ser preparadas para imprenta. Se incluyen acabados especiales como un barniz UVI o una tinta plana blanca, y se opta por una encuadernación en caballete grapada para adoptar los códigos de los libretos que suelen incluir los CDs."
            },
            {
                "id": 7,
                "imgs": ["Golazos_1.jpg", "Golazos_2.jpg", "Golazos_3.jpg", "Golazos_6.jpg", "Golazos_4.jpg", "Golazos_5.jpg"],
                "nombre": "Golazos",
                "nombrest": "Golazos",
                "tags": ["Ilustración", "Profesional"],
                "year": 2024,
                "subtitulo": `Ilustración de interiores y cubierta en un libro de Javier Serrano sobre goles de gran importancia, publicado por <a href="https://www.esferalibros.com" target="_blank">La Esfera de los Libros</a>`,
                "descripcion": `Este proyecto es la creación de 70 ilustraciones, dos para cada uno de los 35 goles presentes en la publicación <a href="https://www.esferalibros.com/libros/golazos/?_gl=1*u7erl3*_up*MQ..*_ga*NTA0OTA0MDEuMTc0NTQ0MjE2NQ..*_ga_751E0PS157*MTc0NTQ0MjE2NS4xLjEuMTc0NTQ0MjE3MS4wLjAuMA..*_ga_BQWSLRJJTJ*MTc0NTQ0MjE2NS4xLjEuMTc0NTQ0MjE3MS4wLjAuMA.." target="_blank">ya disponible</a> –a los que se suman tres más para su edición portuguesa–. La primera de ellas es un retrato que permite identificar al autor del tanto, mientras que la segunda busca explicar el desarrollo de la jugada. Realizadas ambas en blanco y negro por la naturaleza de la edición, se usó el color posteriormente para aplicaciones comerciales.`
            },
            {
                "id": 8,
                "imgs": [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1076912220?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="hue_man nature"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`],
                "nombre": "hue_man nature",
                "nombrest": "hue_man nature",
                "tags": ["Motion Graphics", "Académico"],
                "year": 2024,
                "subtitulo": "Vídeo lyrics para la canción de Saba y No ID «hue_man nature»",
                "descripcion": "Tomando como inspiración la portada del single en el que se publicó la canción elegida, se realiza un vídeo que muestra la letra al tiempo que se genera una narrativa que atrapa la atención del espectador. A la Helvetica de la portada se le añade una Garamond, usando sólo un peso de cada una de las tipografías y siempre el mismo tamaño, lo que genera una base que permite jugar con el texto, siempre priorizando la sincronía con la música."
            },
            {
                "id": 9,
                "imgs": ["Retrato a lapiz de color_1.jpg", "Retrato a lapiz de color_2.jpg"],
                "nombre": "Retrato a lápiz de color",
                "nombrest": "Retrato a lapiz de color",
                "tags": ["Ilustración", "Académico"],
                "year": 2024,
                "subtitulo": "Retrato realizado con lápices de colores",
                "descripcion": "Retrato a partir de una fotografía de Jimmy Fermin, realizado con la combinación de diferentes tramados con lápices de cuatro colores para conseguir toda la gradación de tonos, luces y sombras, generando así la sensación de volumen."
            },
            {
                "id": 10,
                "imgs": ["Retrato a boligrafo_1.jpg", "Retrato a boligrafo_2.jpg"],
                "nombre": "Retrato a bolígrafo",
                "nombrest": "Retrato a boligrafo",
                "tags": ["Ilustración", "Académico"],
                "year": 2024,
                "subtitulo": "Retrato de Joaquín Sabina realizado con bolígrafo",
                "descripcion": "Retrato del cantautor español para la portada de una biografía ficticia, realizado por medio un único bolígrafo negro de la marca Bic. Variando la presión adecuada, la densidad de trazados y el solapamiento de distintas direcciones de línea, se genera toda la gama de grises, y con ello el volumen."
            },
            {
                "id": 11,
                "imgs": ["Coche en puntillismo_1.jpg", "Coche en puntillismo_2.jpg"],
                "nombre": "Coche en puntillismo",
                "nombrest": "Coche en puntillismo",
                "tags": ["Ilustración", "Académico"],
                "year": 2024,
                "subtitulo": "Ilustración de un automóvil a rotulador para un posavasos",
                "descripcion": "Pensada para un posavasos de una cervecería ficticia llamada «Godspeed» —de inspiración en los bares de carretera estadounidenses— esta ilustración está realizada por medio de varios rotuladores calibrados. Éstos permiten cambiar el grosor de los puntos, lo cual, junto a su densidad, genera los tonos de luces y sombras, haciendo innecesario el uso de líneas para componer las formas."
            },
            {
                "id": 12,
                "imgs": ["Fotografias de arquitectura_1.jpg", "Fotografias de arquitectura_2.JPG", "Fotografias de arquitectura_3.JPG", "Fotografias de arquitectura_4.JPG"],
                "nombre": "Fotografías de arquitectura",
                "nombrest": "Fotografias de arquitectura",
                "tags": ["Fotografía", "Personal"],
                "year": 2024,
                "subtitulo": "Colección de imágenes de factura propia",
                "descripcion": "Ésta es una selección de fotografías tomadas en el parque madrileño Juan Carlos I. El foco en este caso está en la composición, llevando la arquitectura de la Estufa Fría —un edificio que se encuentra en dicho parque— a la abstracción."
            },
            {
                "id": 13,
                "imgs": ["Rever Diseno web_1.jpg", "Rever Diseno web_2.jpg", "Rever Diseno web_3.jpg"],
                "nombre": "Rever Diseño web",
                "nombrest": "Rever Diseno web",
                "tags": ["Diseño web", "Académico"],
                "year": 2024,
                "subtitulo": "Diseño web para la página de un festival ficticio",
                "descripcion": "Contenida dentro de un proyecto mayor de diseño de marca, esta web muestra la cartelera de una edición de un festival ficticio. En ella también se puede encontrar la venta de entradas y otros contenidos útiles para un posible asistente al evento. La gráfica se amolda al público joven para el que está pensado el festival y plasma la principal premisa del mismo: la unión de dos estilos —estando compuestas todas las actuaciones por un DJ y un cantante o rapero—."
            },
            {
                "id": 14,
                "imgs": [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1076914648?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Rever"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`],
                "nombre": "Rever Vídeo publicitario",
                "nombrest": "Rever Video publicitario",
                "tags": ["Motion graphics", "Académico"],
                "year": 2024,
                "subtitulo": "Video publicitario para un concierto incluido en un festival ficticio",
                "descripcion": "Contenido dentro de un proyecto mayor de diseño de marca, este ident promociona el concierto principal de un festival ficticio. La premisa central del mismo es la unión de estilos, siendo cada actuación la colaboración de un DJ con cantante o rapero. Ayudado del diseño de sonido a cargo de Daniel Gómez, la pieza adapta al vídeo uno de los carteles diseñados para el festival, también presente en este portfolio."
            },
            {
                "id": 15,
                "imgs": [`Catalalata_1.jpg`, `Catalalata_2.jpg`, `Catalalata_3.jpg`],
                "nombre": "Catalalata",
                "nombrest": "Catalalata",
                "tags": ["Otros", "Académico"],
                "year": 2024,
                "subtitulo": "Envases de conservas para el concurso de packaging Catalalata",
                "descripcion": "Diseño de tres cajas contenedoras de latas de conservas —atún, sardinas y mejillones— dirigidas a un público que adquiere el producto como algo gourmet y que valora el origen natural de la materia prima. Para plasmarlo se opta buscar la sorpresa, alterando lo que es habitual para introducir el entorno del animal dentro de él, generando un poderosa metáfora visual en la que —con un solo elemento— se le explica al consumidor que el producto es tan bueno como el lugar desde donde proviene. La ausencia de texto en el frontal de la caja también es deliberada, tratando de despertar la curiosidad en la sobrepoblada estantería de un supermercado."
            },
            {
                "id": 16,
                "imgs": ["Rever Cartel de actuacion_1.jpg", "Rever Cartel de actuacion_2.jpg"],
                "nombre": "Rever Cartel de actuación",
                "nombrest": "Rever Cartel de actuacion",
                "tags": ["Diseño editorial", "Académico"],
                "year": 2024,
                "subtitulo": "Cartel para un concierto incluido en un festival ficticio",
                "descripcion": "Cartel incluido en un proyecto mayor de diseño de marca que promociona el principal concierto de un festival ficticio creado para la ocasión. La principal premisa del mismo es la mezcla de estilos —siendo cada actuación la unión de un DJ con un cantante o rapero—, y esto se plasma en la gráfica a través de dos tratamientos de imagen, unido cada uno de ellos a una tipografía y un color. Se toma el trabajo de Yoshi Sodeoka como principal inspiración para esta edición del festival y se abraza el error digital, usando ruido, transformaciones de imagen y repeticiones para aludir a un público joven cada vez más familiarizado con esta corriente."
            },
            {
                "id": 17,
                "imgs": ["Dia de las Personas con Discapacidad_1.jpg", "Dia de las Personas con Discapacidad_2.jpg"],
                "nombre": "Día de las Personas con Discapacidad",
                "nombrest": "Dia de las Personas con Discapacidad",
                "tags": ["Diseño editorial", "Académico"],
                "year": 2024,
                "subtitulo": "Cartel para un concurso de la ONG aragonesa DFA",
                "descripcion": "Este cartel tiene como objetivo mostrar la capacidad de las personas con diversidad funcional de romper barreras y prejuicios. Un ejemplo es el propio nombre del día para el que DFA celebra el concurso al que se presenta este cartel,  «Día de las personas con discapacidad». Para transmitir el mensaje, se opta por realizar un fotomontaje en el que se busca llevar a la literalidad esa capacidad de ir más allá de lo que se espera de ellos."
            },
            {
                "id": 18,
                "imgs": ["Retrato a tinta china_1.jpg", "Retrato a tinta china_2.jpg"],
                "nombre": "Retrato a tinta china",
                "nombrest": "Retrato a tinta china",
                "tags": ["Ilustración", "Académico"],
                "year": 2024,
                "subtitulo": "Retrato de William Dafoe realizado en acuarela",
                "descripcion": "Usando un único color de acuarela, se realiza este retrato del reconocido actor para una publicación editorial ficticia. Se usan las aguadas para añadir profundidad a las sombras de la imagen y generar volumen. Se trabaja primero en grises muy luminosos, para ir añadiendo capas hasta conseguir los negros más profundos allí donde son necesarios."
            },
            {
                "id": 19,
                "imgs": ["Stand for something_1.jpg", "Stand for something_2.png"],
                "nombre": "Stand for something",
                "nombrest": "Stand for something",
                "tags": ["Otros", "Académico"],
                "year": 2023,
                "subtitulo": "Lettering inspirado en la canción de Kendrick Lamar «HiiiPoWeR»",
                "descripcion": "Consiste en la realización de un lettering con los versos «Stand for something or die in the morning», que forman el rostro del rapero. Al igual que los referentes utilizados —principalmente del ámbito del graffiti, tan íntimamente ligado al hiphop—, se prioriza el resultado final y la adaptación a las formas sobre la legibilidad."
            },
            {
                "id": 20,
                "imgs": ["Chanel_1.jpg", "Chanel_2.png"],
                "nombre": "Chanel",
                "nombrest": "Chanel",
                "tags": ["Diseño editorial", "Fotografía", "Académico"],
                "year": 2022,
                "subtitulo": "Cartel de una exposición ficticia sobre la vida y obra de Coco Chanel",
                "descripcion": "Se trata de estudiar el trabajo de un diseñador —en este caso, Isidro Ferrer— y realizar un cartel siguiendo las directrices concluídas de esta investigación. Se representa la polémica que despierta Chanel por sus lazos durante la ocupación alemana de Francia interviniendo un zapato de tacón, sustituyendo la punta negra del icónico diseño de la modista por un salpicón de sangre. El uso de una fotografía de objeto con un fondo de color uniforme sobre el que se maqueta la información de forma caótica aunque vertebrada por una retícula"
            }
        ]





        let btnAbrirNavMov = document.querySelector(".abrirMenu");
        btnAbrirNavMov.addEventListener("click", () => {
            abrirNavMov();
        })
        const abrirNavMov = () => {
            let nav = document.querySelector(".fondo");
            nav.classList.remove("abajo");
        }




        let btnCerrarNavMov = document.querySelector(".cerrarNavMov");
        btnCerrarNavMov.addEventListener("click", () => {
            cerrarNavMov();
        })
        const cerrarNavMov = () => {
            let nav = document.querySelector(".fondo")
            nav.classList.add("abajo")
        }







        //pintar los discos
        const pintarDiscos = () => {

            //llegar a donde se van a pintar
            let lista = document.querySelector("#discosul")

            //crear una funcion para guardar el html que se va a crear
            let html = ``;
            let categorias;
            let spans;

            // crear un bucle que se haga por cada elemento de data (por cada disco) 
            data.forEach(elem => {

                // añadir a la funcion 'html' todo la info de un disco
                html += `
                    <li class="trabajo" id="${elem.id}">
                        <div class="card">
                            <a class="enlace" href="">
                                <img src="/assets/img/${elem.nombrest}_1.jpg" alt="${elem.nombre}" class="imgproy">
                                <span class="nombre">${elem.nombre}</span>
                            </a>
                        </div>
                    </li>
                `;
            })

            // añadir a #discosul (donde se pintan los discos) el html que se acaba de crear con el bucle
            lista.innerHTML = html;
        }





        // const pintarDiscosFav = (discosFav) => {
        //     // elegir la parte del html donde se va a incluir
        //     let list = document.querySelector("#discosFavUl")

        //     // crear una funcion para guardar el html y rellenarlo con los datos
        //     let html = ``;

        //     discosFav.forEach(elem => {

        //         // Entiendo que al darle al disco el id que le corresponde según data estoy dándole el mismo id
        //         // que al disco que está fuera del menú, aunque parece no dar problemas. Lo que se me había ocurrido
        //         // para solucianarlo es al disco que está fuera del menú ponerle un id = "x${elem.id}" y al que está
        //         // dentro del menú ponerle un id = "y${elem.id}", de forma que antes de buscar el discos que coincide
        //         // con su id se elimina la primera letra. Pero por lo que he podido encontrar (y he comprobado por mi
        //         // cuenta) si guardo el id en una función después no puedo aplicarle slice para eliminar esa 1a letra.
        //         html += `
        //             <li class="discoFav discoSeleccionable relleno" id="${elem.id}">
        //                 <div class="cardFav card">
        //                     <img src="${elem.ubi}" alt="Portada de ${elem.nombre}">
        //                     <button class="btnestrella">
        //                         <span class="estrellaDisco material-symbols-rounded">star</span>
        //                     </button>
        //                     <div class="descripcion">
        //                         <span class="nombre">${elem.nombre}</span>
        //                         <span class="artista">${elem.artista}</span>
        //                     </div>
        //                 </div>
        //             </li>
        //         `;

        //     })
        //     list.innerHTML = html;

        // }





        // funciones que abren y cierran el desplegable donde se muestran los favoritos
        // const abrirDesplegable = () => {
        //     if (masInfoAbierto == true) {
        //         cerrarMasInfo();
        //     }
        //     let desplegable = document.querySelector("#desplegable");
        //     desplegable.classList.add("abierto");
        //     desplegableAbierto = true;
        // }
        // const cerrarDesplegable = () => {
        //     let desplegable = document.querySelector("#desplegable");
        //     desplegable.classList.remove("abierto");
        //     desplegableAbierto = false;
        // }



        const abrirMasInfo = () => {
            let trabajos = document.querySelector("#seccion")
            let index;
            let masinfo = document.querySelector("#masinfo")
            let trabajoClickado;

            trabajos.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target.className == ("trabajo")) {
                    index = e.target.id;
                    trabajoClickado = data.find(proyecto => proyecto.id == index);
                }
                else if (e.target.className != ("trabajo") && (e.target.className == ("card") || e.target.className == ("enlace") || e.target.className == ("imgproy") || e.target.className == ("nombre"))) {
                    index = e.target.closest(".trabajo").id;
                    trabajoClickado = data.find(proyecto => proyecto.id == index);
                }
                pintarMasInfo(trabajoClickado);
                masinfo.classList.add("masInfoVisto");
                cerrarMasInfo();
            });
        }


        // cerrarmasinfo.addEventListener("click", () => {
            
        // })
        // let masinfo = document.querySelector("#masinfo")
        // 






        const pintarMasInfo = (elem) => {
            let desc = document.querySelector("#masinfo");
            let html = ``;
            let tags = elem.tags;
            let etiquetas = ``;
            let imgs = elem.imgs;
            let rutas = ``;
            tags.forEach((elemento, index) => {
                if (index == 0) {
                    etiquetas += `<span class="tag">${elemento}</span>`;
                } else {
                    etiquetas += `<span class="tag">·</span>`;
                    etiquetas += `<span class="tag">${elemento}</span>`;
                }
            })
            imgs.forEach((e) => {
                if (e.startsWith("<div")) {
                    rutas += e;
                } else {
                    rutas += `<img src="/assets/img/${e}" alt="Imagen del proyecto ${elem.nombre}" class="imgmasinfo">`
                }
            })
            if (imgs.length == 1) {
                desc.classList.add("deuno")
            } else {
                desc.classList.remove("deuno")
            }

            html += `
                <figure class="figmasInfo">
                    ${rutas}
                </figure>
                    <div class="masInfoTxt">
                        <a href="javascript:;" class="cerrar" id="cerrarmasinfo"><span class="material-symbols-rounded">close</span></a>
                        <h2 class="nombreProyecto">${elem.nombre}</h2>
                        <div class="subt">
                            <span class="subtitulo">${elem.subtitulo}</span>
                            <p>${elem.descripcion}</p>
                            <div class="tags">
                                ${etiquetas}
                            </div>
                        </div>
                    </div>
                `;


            desc.innerHTML = html;
        }







        //cuando pulsas en la estrella
        const pulsarFav = () => {

            // listener de eventos de aplicado a window para que también lo coja si le das desde uno de los modales
            window.addEventListener("click", (e) => {

                // variable en la que guardarse el id del disco más cercano a donde has pulsado
                let index;

                let discoClickado;

                // condicional que para asegurarse que estás pulsando una estrella
                if (e.target.className == ("estrellaDisco material-symbols-rounded")) {

                    // cuando pulsas la estrella busca el discoSeleccionable más cercano y guarda su id
                    index = e.target.closest(".discoSeleccionable").id;

                    // variable que guarda el objeto que encuentra en data que coincida su id con el del disco en el que se ha hecho click
                    discoClickado = data.find(disco => disco.id == index);

                    // condicional terciario para hacer fav si no lo era y quitar el fav si ya lo era
                    // 
                    //               
                    //                 aquí es como si                
                    //                 discoClickado.fav estuviese        entonces          sino (o lo que es lo mismo, que sea falso)
                    //                 igualado a true, pero                       lo pasas         lo haces 
                    //                 se puede omitir                              a ser           verdadero
                    //                                                              falso
                    discoClickado.fav = discoClickado.fav /* == true */ ? false : true;

                    // volvemos a añadir a la variable que guarda los fav todos los discos que lo tengan
                    listaDeFav = data.filter(disco => disco.fav == true);

                    // volvemos a pintar los discos del desplegable (es decir, los favoritos)
                    pintarDiscosFav(listaDeFav);
                    pintarDiscos();
                }
            })
        }

        pintarDiscos();
        abrirMasInfo();
        // abrirNavMov();
        pulsarFav();


        linksdelNav();
}

import barba from '@barba/core';
// import barbaCss from '@barba/css';
import gsap from 'gsap';



// tell Barba to use the css plugin
// barba.use(barbaCss);

const animationEnter = (container) => {
    return gsap.from(container, {
        autoAlpha: 0,
        duration: 0.2,
        clearProps: 'all',
        ease: 'none'
    }
    )
}

const animationLeave = (container) => {
    return gsap.to(container, {
        autoAlpha: 0,
        duration: 0.2,
        clearProps: 'all',
        ease: 'none'
    }
    )
}
// barba.init({
//     transitions: [
//         {
//             sync: true,
//             name: 'cargando', //la llamo "cargando"
//             once() { } //en barba, la transición que se aplica cuando se carga la página se llama once
//             //se aplica en todas las paginas que tenga nuestro proyecto
//         },
//         {
//             name: 'izq',
//             from: {
//                 namespace: ['index']
//             },
//             to: {
//                 namespace: ['cv']
//             }, //la llamo "cargando"
//             leave() {},
//             enter() {}
//         },
//         {
//             name: 'izq',
//             from: {
//                 namespace: ['index']
//             },
//             to: {
//                 namespace: ['contacto']
//             }, //la llamo "cargando"
//             leave() {},
//             enter() {}
//         },
//         {
//             name: 'izq',
//             from: {
//                 namespace: ['cv']
//             },
//             to: {
//                 namespace: ['contacto']
//             }, //la llamo "cargando"
//             leave() {},
//             enter() {}
//         },
//         {
//             name: 'dch',
//             from: {
//                 namespace: ['contacto']
//             },
//             to: {
//                 namespace: ['cv']
//             }, //la llamo "cargando"
//             leave() {},
//             enter() {}
//         },
//         {
//             name: 'dch',
//             from: {
//                 namespace: ['contacto']
//             },
//             to: {
//                 namespace: ['portfolio']
//             }, //la llamo "cargando"
//             leave() {},
//             enter() {addEvents();}
//         },
//         {
//             name: 'dch',
//             from: {
//                 namespace: ['cv']
//             },
//             to: {
//                 namespace: ['portfolio']
//             }, //la llamo "cargando"
//             leave() {},
//             enter() {;}
//         }

//     ]
// })
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

barba.init({
    transitions: [
        {
            once({ next }) {
                animationEnter(next.container)
            },
            leave: ({current}) => 
                animationLeave(current.container),
                enter({ next }) {
                    animationEnter(next.container)
                }
            }
    ]
})


barba.hooks.beforeOnce(() => {
    addEvents();
})
barba.hooks.afterEnter(() => {
    addEvents();
})

function cerrarMasInfo() {
    let cerrar = document.querySelector("#cerrarmasinfo");
    let masinfo = document.querySelector("#masinfo")
    cerrar.addEventListener("click", (e) => {
        e.preventDefault();
        masinfo.classList.remove("masInfoVisto");
        // masInfoAbierto = false;
    });
}

// const abrirNavMovB = () => {
//     let nav = document.querySelector(".fondo");
//     nav.classList.remove("abajo");
// }
// const cerrarNavMovB = () => {
//     let nav = document.querySelector(".fondo")
//     nav.classList.add("abajo")
// }





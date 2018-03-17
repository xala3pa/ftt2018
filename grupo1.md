---
title: This is my title
layout: post
---
# Quién
dgonzalezdiez@gmail.com
# Qué
Integración continua basada en git+jenkins
# Por qué
Un equipo que empezó a crecer en una empresa que por su contexto no podía acotar el alcance de las funcionalidades. Muchos proyectos que se abrían y cerraban, cargas de trabajo que variaban de un proyecto a otro, un día todo el equipo en un proyecto y dos días después cada miembro de equipo con un proyecto distinto. Nos proporcionó mucha agilidad.
# Cuándo
Supongo que en el momento en el que hay más de un desarrollador aunque he de reconocer que hay escenarios en los que me parece que se podría estar igual sin ello. He estado en un equipo que éramos dos y desarrollábamos una app android ¿Que sentido tiene un Jenkins cuando los dos podemos hacer "botón derecho->generar release" a partir de un hash de git?
# Links
https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/0988262592 (es una novela pero creo que explica claro como el agua la finalidad de la integración continúa, que es agilizar el delivery y que hay que mantener el foco siempre en el cuello de botella)
https://continuousdelivery.com (si estás empezando puede ser un buen punto)
https://jenkins.io (para empezar y es el servidor de integración más extendido)
# Quién
juanignaciosl@gmail.com
# Qué
Testing sobre Ruby on Rails
# Por qué
Porque no queda otro remedio xD. Mantenemos la aplicación central de CARTO, responsable de Builder. Esencialmente, APIs REST de metadatos sobre las visualizaciones. Ruby on Rails (y en parte Ruby) sin tests es algo inmantenible (incluso con ellos lo es).
# Cuándo
En básicamente todas las PRs, en general no damos de paso una pull request sin tests.
# Links
Meh, es algo bastante estándar. Por destacar algo, usamos zeus para que arranque más rápido: https://github.com/burke/zeus
# Quién
jerolba@gmail.com
# Qué
Profiling de la JVM
# Por qué
En Nextail tenemos procesos que manejan gran cantidad de datos y los magrean mucho.
Hasta ahora se había implementado los procesos para que funcionaran sin preocuparse de cuanto tiempo tardaran o cuantos recursos consumieran, y se escalaba verticalmente.
Ejecutar esos procesos en local era imposible por los recursos que requería, por lo que dificultaba la ejecución de pruebas (que no test) en entornos locales para validar. Esto hacía que todo se tuviera que probar en un entorno de integración con un proceso largo de prueba y error, llegando a subir cosas a producción con errores por haberse hecho pocas pruebas.
En mi empeño de poder hacer pruebas en mi máquina hice profiling de la aplicación, permitiendo reducir el consumo de memoria a 1/10 y el tiempo de proceso a 1/3, y mejorado mi salud mental :)
Indirectamente ha favorecido al entorno de producción, reduciendo los tiempos de los procesos y el gasto de AWS
# Cuándo
Aplicaciones con gran consumo de recursos donde se está llegando al límite del escalado vertical, o donde se intuye que hay un problema de recursos que impide mejorar el throughtput del sistema.
Último recurso, no olvidemos que "La optimización prematura es la raiz de todo mal.
# Links
http://www.brendangregg.com/flamegraphs.html
http://hirt.se/blog/
# Quién
loaisa@gmail.com
# Qué
Subcontratar servicios que te hacen la vida más fácil
# Por qué
Definir una arquitectura que nos ayudase a solucionar un problema complejo de la manera más automatizada posible. 
Teníamos un API con unos datos que se actualizaban de una vez, con un preprocesamiento bastante pesado. Teníamos el requisito de mantener en modo backup las anteriores cargas de datos para tenerlas disponibles al momento por si la carga nueva tenía algún problema. Teníamos el añadido de que el tiempo de respuesta fuera ínfimo, cosa que solucionamos con una carga en memoria de todos los datos procesados (64GB de Ram de datos...)

Para solucionar todo esto usamos varios servicios de AWS como Lambdas, ECS, Cloudformation, y el sdk para Java. Nos atamos muchísimo a AWS pero el cliente quedó encantado con la solución y su rendimiento.
# Cuándo
Cuando al cliente no le importe atarse a una tecnología concreta (AWS en este caso) y acepte el gasto de esta. Si el equipo es pequeño y los tiempos de entrega cortos.
# Links
https://aws.amazon.com/es/
https://cloud.google.com/
https://azure.microsoft.com/es-es/
# Quién
jerolba@gmail.com
# Qué
JFleet: Construyendo el mapeador de BD más rápido del mundo
# Por qué
Cuando como resultado de tus procesos tienes que persistir millones de registros en BD, tu ORM o herramienta de persistencia de base de datos se convierte en un cuello de botella.
JFleet te permite escribir un stream/collection muy grande de Objetos en MySQL o PostgreSQL usando la técnica de persistencia más rápida que proporciona cada uno, usando sólo las anotaciones de JPA para mapear tus entidades a tablas (sin usar ninguna implementación JPA)
¿Por qué podría interesar hablar de la herramienta? Por que la he hecho yo :D
https://github.com/jerolba/jfleet
https://github.com/jerolba/jfleet-benchmark
# Cuándo
Cuando tienes un montón de datos que escribir que en una tabla (a partir de millares de registros ya empieza a notarse la diferencia)
Y es para Java :D
# Links
Por ahora sólo tengo publicado esto:
https://github.com/jerolba/jfleet
https://github.com/jerolba/jfleet-benchmark
Quiero escribir un post para hablar de la herramienta y darla a conocer, pero por ahora estoy trabajando en depurarla y documentarla.

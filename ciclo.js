const prompt=require("prompt-sync")();

alumnos=[];
notas=[];
rojos=[];
sobre=[];
sumaNotas=0
sumaRojos=0
mayor=0
posicion=0
menor=10
posicionMenor=0

do{
    opcion=parseInt(prompt("1)Ingresar alumno y nota \n2)Ver ingresados \n3)Salir (Muestra final de registro)\n"))
    switch (opcion){
        case 1:
        do{nombre=prompt("Ingrese nombre alumno (2 para salir): ");
        if (nombre==2){
            break
        }
        alumnos.push(nombre)
        calificaciones=parseFloat(prompt("Ingrese nota alumno: "));
        notas.push(calificaciones);
        if (calificaciones<4){
        rojos.push(calificaciones);
        }
    }while(nombre!="2");
        break
        case 2:
            for (var i=0;i<alumnos.length;i++){
                console.log(alumnos[i],"----",notas[i]+"\n")
            }
            break
        }
}while(opcion!=3)
for (var i=0;i<notas.length;i++){
    sumaNotas=sumaNotas+notas[i]
}
promedio=sumaNotas/notas.length

notas.forEach(element => {
    if(element>promedio){
        sobre.push(element)
    }
});
for (var i=0;i<rojos.length;i++){
    sumaRojos=sumaRojos+rojos[i]
}
for (var i=1;i<notas.length;i++){
    if(notas[i]>mayor){
        mayor=notas[i]
        posicion=i
    }
}

for (var i=1;i<notas.length;i++){
    if(notas[i]<menor){
        menor=notas[i]
        posicionMenor=i
    }
}


console.log("El alumno con la mejor nota es: ", alumnos[posicion]);
console.log("El promedio del curso es: ", sumaNotas/notas.length);
console.log("El promedio de rojos es de: ", sumaRojos/rojos.length);
console.log("El numero de la lista del alumno con la peor nota es: ", (posicionMenor+1));
console.log("La cantidad de reprobados es de: ", rojos.length);
console.log("La cantidad de alumnos sobre el promedio es: ", sobre.length);
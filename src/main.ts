type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

interface NumeroPacientesPorEspecialidad {
    medicoDeFamilia: number;
    pediatria: number;
    cardiologia: number;
  }

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

const obtenPacientesAsignadosAPediatria = (pacientes: Pacientes[]): Pacientes [] => {
    let pacientesPedtria = [];
    for (let i=0; i<pacientes.length; i++){
        if(pacientes[i].especialidad === "Pediatra" ){
            pacientesPedtria.push(pacientes[i]);
        }
    }
    return pacientesPedtria
  };
   console.log("Pacientes asignados a Pediatria",obtenPacientesAsignadosAPediatria(pacientes));


   const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (pacientes: Pacientes[]): Pacientes [] => {
    let pacientesMenoresDeDiez = [];
    for (let i=0; i< pacientes.length; i++){
        if(pacientes[i].edad <10 && pacientes[i].especialidad === "Pediatra"){
            pacientesMenoresDeDiez.push(pacientes[i]);
        }
    }
    return pacientesMenoresDeDiez
  };
  console.log("Pacientes asignados a Pediatria menores de 10 años",obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));


  const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
    let activarProctolo = false;
    for (let i=0; i<pacientes.length && !activarProctolo; i++){
        if(pacientes[i].frecuenciaCardiaca>100 && pacientes[i].temperatura>39){
          activarProctolo = true
        }
    }
    return activarProctolo;
  };

  console.log(activarProtocoloUrgencia(pacientes));

  const reasignaPacientesAMedicoFamilia = (pacientes: Pacientes[]): Pacientes[] => {
    let pacientesReasignados = [];
    for (let i=0; i<pacientes.length; i++){
        pacientesReasignados.push({...pacientes[i]})
        if(pacientesReasignados[i].especialidad === "Pediatra"){
          pacientesReasignados[i].especialidad = "Medico de familia";
        }
    }
    return pacientesReasignados; 
  };
  console.log(reasignaPacientesAMedicoFamilia(pacientes));

  const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
    let sePuedeIrACasa: boolean = true
    for (let i =0; i<pacientes.length; i++){
        if (pacientes[i].especialidad === "Pediatra"){
            sePuedeIrACasa = false
        }
    }
    return sePuedeIrACasa;
  };
  console.log("Se puede ir a casa:", HayPacientesDePediatria(pacientes));

  const cuentaPacientesPorEspecialidad = (pacientes: Pacientes[]): NumeroPacientesPorEspecialidad => {
    let numeroPacientesPorEspecialidad : NumeroPacientesPorEspecialidad= {medicoDeFamilia : 0, pediatria : 0, cardiologia : 0 }
    for (let i =0; i<pacientes.length; i++){
        if (pacientes[i].especialidad === "Medico de familia"){
            numeroPacientesPorEspecialidad.medicoDeFamilia++ 
        }
        if (pacientes[i].especialidad === "Pediatra"){
            numeroPacientesPorEspecialidad.pediatria++
        }
        if (pacientes[i].especialidad === "Cardiólogo"){
            numeroPacientesPorEspecialidad.cardiologia++
        }
    }
    return numeroPacientesPorEspecialidad;
  };

  console.log(cuentaPacientesPorEspecialidad(pacientes))

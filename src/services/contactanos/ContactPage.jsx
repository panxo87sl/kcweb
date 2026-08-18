import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    profesion: "",
    motivo: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    // Nombre: letras + al menos 2 palabras + mínimo 4 caracteres
    if (!form.nombre.trim()) {
      newErrors.nombre = "Campo requerido";
    } else if (form.nombre.trim().length < 3) {
      newErrors.nombre = "Debe tener al menos 3 caracteres";
    } else if (!form.nombre.match(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)+$/)) {
      newErrors.nombre = "Ingresa nombre y apellido válido";
    }

    if (!form.telefono.match(/^[0-9]{8,11}$/)) {
      newErrors.telefono = "Teléfono inválido";
    }

    if (!form.correo.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.correo = "Correo inválido";
    }

    if (!form.profesion) newErrors.profesion = "Selecciona una opción";

    if (!form.motivo.trim()) newErrors.motivo = "Campo requerido";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    console.log("FORM OK:", form);

    // aquí después conectas envío real
  };

  const handleReset = () => {
    setForm({
      nombre: "",
      telefono: "",
      correo: "",
      profesion: "",
      motivo: "",
    });
    setErrors({});
  };

  return (
    <>
      <Helmet>
        <title>Trabaja con Nosotros | KINECLIN Centro de Salud</title>
        <meta
          name="description"
          content="Postula para trabajar en KINECLIN Centro de Salud en Antofagasta: kinesiología, enfermería, psicología, nutrición y más especialidades."
        />
      </Helmet>

      <main className="contactPage">
        <section className="contactSection">
          <div className="contactContainer">
            <h1 className="contactTitle">Trabaja con nosotros</h1>

            <form className="contactForm" onSubmit={handleSubmit}>
              {/* Nombre */}
              <div className="contactField">
                <label>Nombre y apellido</label>
                <input type="text" name="nombre" value={form.nombre} onChange={handleChange} />
                {errors.nombre && <span>{errors.nombre}</span>}
              </div>

              {/* Teléfono */}
              <div className="contactField">
                <label>Teléfono</label>
                <input
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                />
                {errors.telefono && <span>{errors.telefono}</span>}
              </div>

              {/* Correo */}
              <div className="contactField">
                <label>Correo</label>
                <input type="email" name="correo" value={form.correo} onChange={handleChange} />
                {errors.correo && <span>{errors.correo}</span>}
              </div>

              {/* Profesión */}
              <div className="contactField">
                <label>Profesión u oficio</label>
                <select name="profesion" value={form.profesion} onChange={handleChange}>
                  <option value="">Seleccionar</option>
                  <option>Kinesiología</option>
                  <option>Enfermería</option>
                  <option>Médico General</option>
                  <option>Médico Especialista</option>
                  <option>Psicología</option>
                  <option>Nutricionista</option>
                  <option>Fonoaudiología</option>
                  <option>Terapia Ocupacional</option>
                </select>
                {errors.profesion && <span>{errors.profesion}</span>}
              </div>

              {/* Motivo */}
              <div className="contactField">
                <label>¿Por qué quieres trabajar con nosotros?</label>
                <textarea name="motivo" rows="4" value={form.motivo} onChange={handleChange} />
                {errors.motivo && <span>{errors.motivo}</span>}
              </div>

              {/* Botones */}
              <div className="contactActions">
                <button type="submit" className="btnPrimary">
                  Enviar solicitud
                </button>

                <button type="button" className="btnSecondary" onClick={handleReset}>
                  Limpiar formulario
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

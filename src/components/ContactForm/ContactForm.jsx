import axios from "axios";
import React from "react";
import { useState } from "react";
import { brands, models, generateYears } from "../../data/data";
import styles from "../ContactForm/ContactForm.module.css";
import { IoCloseOutline } from "react-icons/io5";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    carBrand: "",
    carModel: "",
    carYear: "",
    problem: "",
  });
  const [visible, setVisible] = useState(false);
  const years = generateYears(40);

  const animatedComponent = makeAnimated();
  const options = [
    { value: "ford", label: "Ford" },
    { value: "bmw", label: "BMW" },
    { value: "ford", label: "Ford" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    // якщо змінили марку, скидаємо модель
    if (name === "carBrand") {
      setFormData({ ...formData, carBrand: value, model: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/send", formData);
      alert(res.data.message);
      setFormData({
        name: "",
        phone: "",
        email: "",
        carBrand: "",
        carModel: "",
        carYear: "",
        problem: "",
      });
      setVisible(false);
    } catch (error) {
      console.error("Помилка Axios:", error.response?.data || error.message);
      alert(
        "Помилка відправки: " + (error.response?.data?.message || error.message)
      );
    }
  };
  return (
    <div>
      <button
        className={styles.buttonContainerForm}
        onClick={() => setVisible(!visible)}
      >
        Записатися онлайн
      </button>

      {visible && (
        <div className={styles.modalForm}>
          <div className={styles.modal}>
            <button
              className={styles.buttonClose}
              onClick={() => setVisible(false)}
            >
              <IoCloseOutline className={styles.close} size={30} />
            </button>
            <h1 className={styles.title}>Вкажіть дані свого автомобіля</h1>
            <div className={styles.textContainer}>
              <p className={styles.text}>
                Це допоможе спрогнозувати вартість та прискорити процес
                обслуговування
              </p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formContainer}>
                <label htmlFor="name" className={styles.label}>
                  Ім'я
                </label>
                <input
                  className={styles.formName}
                  type="text"
                  name="name"
                  id="name"
                  // placeholder="Ім'я"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label htmlFor="phone" className={styles.label}>
                  Телефон
                </label>
                <input
                  className={styles.formName}
                  type="tel"
                  name="phone"
                  id="phone"
                  // placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  className={styles.formName}
                  type="email"
                  name="email"
                  id="email"
                  // placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formContainer}>
                <label htmlFor="carBrand" className={styles.label}>
                  Марка авто
                </label>
                <select
                  className={styles.formSelect}
                  id="carBrand"
                  onChange={handleChange}
                  type="text"
                  name="carBrand"
                  value={formData.carBrand}
                  required
                >
                  <option value="">Марка авто</option>
                  {brands.map((b) => (
                    <option key={b} value={b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formContainer}>
                <label htmlFor="carModel" className={styles.label}>
                  Модель авто
                </label>
                <select
                  className={styles.formSelect}
                  id="carModel"
                  onChange={handleChange}
                  type="text"
                  name="carModel"
                  value={formData.carModel}
                  required
                >
                  <option value="">Модель авто</option>
                  {formData.carBrand &&
                    models[formData.carBrand].map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                </select>
              </div>
              <div className={styles.formContainer}>
                <label htmlFor="carYear" className={styles.label}>
                  Вкажіть рік виробництва
                </label>
                <select
                  className={styles.formSelect}
                  onChange={handleChange}
                  type="text"
                  name="carYear"
                  value={formData.carYear}
                  required
                >
                  <option value="">Pік виробництва</option>
                  {years.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </select>
              </div>
              <div className={styles.formContainer}>
                <textarea
                  name="problem"
                  placeholder="Опишіть свою проблему"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                  className={styles.problem}
                />
              </div>
              <button className={styles.buttonContainerForm} type="submit">
                Відправити
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default ContactForm;

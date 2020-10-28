import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/14062932?s=460&u=ded7b3ccf434fcc4e856e071e0a88fdca41c500b&v=4" alt="Avatar Google" />
        <div>
          <strong>LSOS</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> <br />
          Maecenas ornare pharetra aliquet. Proin placerat feugiat quam, vehicula bibendum tellus tincidunt non. Sed ultricies ipsum at purus rutrum lobortis.
          </p>
      <footer>
        <p>
          Preço/hora
              <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify'
    

const schema = yup.object({
  name: yup.string().required("Obrigatório"),
  brand: yup.string().required("Obrigatório"),
  color: yup.string().required("Obrigatório"),
  type: yup.string().required("Obrigatório"),
});

const saveData = (id, data) => {
  localStorage.setItem(`car-${id}`, JSON.stringify(data));
};

const getData = (id) =>
  new Promise((resolve) => {
    setTimeout(
      () => resolve(JSON.parse(localStorage.getItem(`car-${id}`))),
      2000
    );
  });

export default function Form() {
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [isLoading, setIsLoading] = useState(!!id);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    if (id) {
        saveData(id, data);
        toast.success('Carro atualizado com sucesso')
    } else {
        saveData(2, data);
        toast.success('Carro criado com sucesso')
      reset();
    }

    saveData(0, data);
  };

  useEffect(() => {
    const request = async () => {
      const data = await getData(id);

      setIsLoading(false);

      if (!data) {
        setNotFound(true);
        return;
      }
      Object.entries(data).forEach(([key, value]) => setValue(key, value));
    };
    if (id) {
      request();
    }
  }, [id, setValue]);

  if (notFound) {
    return <p>Carro não encontrado </p>;
  }

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Nome do Carro*: <input type="text" {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </label>
        <select defaultValue="" {...register("brand")}>
          <option value="" disabled hidden>
            Selecione a Marca*
          </option>

          <option value="BMW">BMW</option>
          <option value="FIAT">FIAT</option>
          <option value="VW">VW</option>
          <option value="Mercedez">Mercedez</option>
        </select>
        {errors.brand && <span>{errors.brand.message}</span>}

        <label>
          Cor do Carro*: <input {...register("color")} />
        </label>
        {errors.color && <span>{errors.color.message}</span>}
        <label>
          Tipo do Carro*: <input {...register("type")} />
        </label>
        {errors.type && <span>{errors.type.message}</span>}

        <button type="Submit">Enviar</button>
      </form>
    </div>
  );
}

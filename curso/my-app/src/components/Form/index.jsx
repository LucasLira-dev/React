import { useState } from 'react';
import '../../App.css';

import { categories } from '../Category';

function Form(){

    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');
    const [videos, setVideos] = useState([]);
    const [errors, setErrors] = useState('')

    function valideUrl(url){
        const regex = /^(?:https?:\/\/)?(www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if(!regex.test(url) || url.length < 43){
            setErrors('ERRO: URL inválida');
            return false
        }else{
            return url.substring(32, 43)// pega o id do video
        }
    }

    function onSave(e){
        e.preventDefault();
        console.log(url, category);

        const newVideo = {
            url,
            category
        }

      //validar categoria
        if(!category || category === '-'){
            setErrors('ERRO: Categoria inválida');
            return
        }else{
            setErrors('');
            }

        //validar URL
        const urlVideo= valideUrl(url);
        if(urlVideo && category){
            //salcar os dados
            //guardar a url e a categoria
            setVideos([...videos, newVideo]);
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]));//salvando no local storage
          
            setUrl('');
            setCategory('');
        }else{
            setErrors('ERRO: URL inválida');
            return
        }

    }
    

    return(
        <section className='pt-[68px] flex justify-center items-center flex-col mx-[1rem]'>
            <h2 className='mb-[1rem]'>Cadastro de video</h2>
            <form                                           className='w-full max-w-[90%] bg-[#333333] rounded-[20px] px-[36px] py-[64px] flex flex-col gap-1 justify-center items-center'
            onSubmit={onSave}
            >
                <div className='w-full flex flex-col justify-center align-middle gap-1'>
                    <label className='mb-[0.rem] text-[1.5rem] text-center'> URL do video </label>
                    <input 
                    type="text" 
                    name='url' placeholder='digite a URL do video'
                    required
                    value={url}
                    onChange={e=> setUrl(e.target.value)}
                    className='w-full bg-[#333333] border-b-[1px] border-[#fff] text-[1.125rem] p-[0.5rem] outline-none'
                    minLength='43'
                    maxLength='43'
                    />
                </div>

                <div className='w-full flex flex-col justify-center align-middle gap-1'>
                    <label 
                    className='mb-[0.rem] text-[1.5rem] text-center'> Categoria </label>
                    <select                                     name="categoria"
                        required
                        className='w-full bg-[#333333] border-b-[1px] border-[#fff] text-[1.125rem] p-[0.5rem] outline-none'
                        value={category}
                        onChange={e=> setCategory(e.target.value)}
                    >
                        <option value='-'>
                            Selecione uma categoria
                        </option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}> {category} </option>
                        ))}
                    </select>
                </div>

                <div>
                    <button className='bg-[#b71c1c] rounded-[10px] font-bold text-[1.125rem] px-[24px] py-[10px]   cursor-pointer text-white mt-[1.5rem] hover:bg-[#f44336]'> Cadastrar </button>
                </div>

                <div className='w-full flex flex-col justify-center align-middle gap-1'>
                    {errors && <p className='text-white text-center text-[1.3rem] mt-[1.5rem] bg-red-600'> {errors} </p>}
                </div>
            </form>
        </section>
    )
}

export default Form;
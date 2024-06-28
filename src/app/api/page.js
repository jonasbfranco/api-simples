"use client"

import { useState, useEffect } from "react";



const URL_API = "https://jsonplaceholder.typicode.com/todos/";

export default function Index() {

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchAllData = async () => {
        try {
            setLoading(true)

            const response = await fetch(URL_API)
            const data = await response.json()

            console.log(response.status, data)

            if (!data)
                throw 'Problema na requisição'

            setData(data)

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAllData()
    }, []);

    return (
        <div>
            <p>Requisicao de uma api com NextJs.</p>
            <br></br>
            {loading && !data &&
                <p>Carregando informações...</p>
            }


            {data && data.map((item) => (
                <div>   
                    <p key={item.id}>Titulo: {item.title}</p>     
                </div>
            ))
            }

        </div>
    )
}
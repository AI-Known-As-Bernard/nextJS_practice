import { useRouter } from "next/router";
import Head from "next/head";

export default function Car({cars}){
    const router = useRouter()
    const {id}=router.query
    
    return (<>
    <Head>
        <title>{cars.color}{cars.id}</title>
        //you can use metatags..etc
    </Head>
    <h1>Hello {id}</h1>
    <img src={cars.image} width="300px"/>
    </>)
}

// export async function getStaticProps({params}){
//     const req = await fetch(`http://localhost:3000/${params.id}.json`)
//     const data = await req.json()
//     return {
//         props:{car:data},
//     }
// }
// //If you prerender then you must have a finite number of pages
// //The below functiosns tells next which dynamic pages to render
// export const getStaticPaths=async()=>{
//     //this method can also request information from an api
//     //After its job is to return a paths object that contains an array that with every route for the dynamic url. 
//     const req = await fetch("http://localhost:3000/.json")
//     const data = await req.json()

//     const paths = data.map((car)=>{
//         return {params: {id:car}}
//     })

//     return {paths, fallback:false}
// }

export async function getServerSideProps({params}){
    //If you use this method of server side generation
    //instead of getStaticPaths then you can copy paste the body form getStaticProps
    //into this method and comment out both getStaticPaths and getStaticPathProps 
    
    const req = await fetch(`http://localhost:3000/${params.id}.json`)
    const data = await req.json()
    return {
        props:{cars:data},
    }
    
}


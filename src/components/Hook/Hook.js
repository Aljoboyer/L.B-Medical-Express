import { useEffect, useState } from "react";

const ServicesUse = () => {
    const [services,setServices] = useState([]);
    const [manages,setManages] = useState([]);
    const [totalpage, setTotalpage] = useState(0);
    const [pageno, setPageno] = useState(0);
    const size = 4;
    const [demo,setDemo] = useState(0)
    useEffect(() => {
      fetch('https://obscure-caverns-42480.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
    },[])

    useEffect(() => {
      fetch(`https://obscure-caverns-42480.herokuapp.com/manageservices?page=${pageno}&&size=${size}`)
      .then(res => res.json())
      .then(data =>{
          const count = data.count
          const pages = Math.ceil(count / size);
          setTotalpage(pages)
          setManages(data.result)
      })
    },[pageno,demo])

    return {
      totalpage,
      setPageno,
      pageno,
      manages,
      services,setServices,setDemo};
}

export default ServicesUse;
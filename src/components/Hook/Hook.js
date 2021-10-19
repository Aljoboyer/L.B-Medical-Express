import { useEffect, useState } from "react";

const ServicesUse = () => {
    const [services,setServices] = useState([])
    useEffect(() => {
      fetch('https://aljoboyer.github.io/mediservices.JSON')
      .then(res => res.json())
      .then(data => setServices(data))
    },[])

    return [services,setServices];
}

export default ServicesUse;
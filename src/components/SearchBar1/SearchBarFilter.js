import React from "react"
import './SearchBarFilter.css';
export default function SearchBarFilter(props){
    const [formData, setFormData] = useState(initialFormValue());
    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:4000/api/findmoviefiltered", formData).then(
              (response) => {
                console.log(response);
                console.log("gg");
                toast.warning(response.message);
                <Link to={{
                    pathname: '/ResultPage',
                    state: response
                  }}>ResultPage</Link>;
              },
              (error) => {
                console.log(error.data);
                toast.error("Error del servidor, inténtelo más tarde");
              }
            );
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    return(
        <div class="form-box-filter">
            <form class="form-signin" onSubmit= {onSubmit} onChange={onChange}>
                <input type="text" class="search-field-filter movies-filter" placeholder="What are we looking for?" defaultValue={formData.name}/>
                <input type="date" class="search-field-filter startDate-filter" defaultValue={formData.stardate}/>
                <input type="date" class="search-field-filter endDate-filter" defaultValue={formData.enddate}/>
                <input type="text" class="search-field-filter country-filter" placeholder="Country" defaultValue={formData.country}/>
                <button class="search-btn-filter" type="submit">Search</button>
            </form>
        </div>
    );
}
function initialFormValue() {
    return {
      name: "",
      stardate: "",
      enddate: "",
      country: "",
    };
  }


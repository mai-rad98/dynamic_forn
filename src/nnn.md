let { register, handleSubmit} = useForm();

    return (
      <div>
      <form onSubmit={handleSubmit(onSubmit())}> 
      <h3>permit application</h3>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">TYPE</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("type")}/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("title")} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">suffix</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register("suffix")} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" {...register("check")} />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <select className="form-select" aria-label="Default select example"   {...register("select")}>
        <option >Department</option>
        <option >One</option>
        <option >Two</option>
        <option >Three</option>
      
      </select>
      <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    
        </div>
    )
  }
  
  function onSubmit(values){
      console.log(values);
  }
  

[
    {
        "page_label": "Job Application Form",
        "fields": [
            {
                "field_id": "english_name",
                "field_label": "Name",
                "field_mandatory": "yes",
                "field_placeholder": "Enter name",
                "field_type": "text",
                "field_value": ""
            },
            {
                "field_id": "email",
                "field_label": "Email",
                "field_mandatory": "yes",
                "field_placeholder": "Enter email",
                "field_type": "text"
            },
            {
                "field_id": "employment",
                "field_label": "Employment desired",
                "field_value": "Part-Time",
                "field_mandatory": "yes",
                "field_options": [
                    {
                        "option_label": "Full-Time"
                    },
                    {
                        "option_label": "Part-Time"
                    }
                ],
                "field_type": "select"
            },
            {
                "field_id": "contact",
                "field_label": "Contact No.",
                "field_mandatory": "yes",
                "field_placeholder": "Enter contact no.",
                "field_type": "text"
            },
            {
                "field_id": "driving_license",
                "field_label": "I confirm to have driving license.",
                "field_type": "checkbox",
                "field_value": "checked"
            },
            {
                "field_id": "identity",
                "field_label": "Driving License No.",
                "field_mandatory": "yes",
                "field_placeholder": "e.g. 012 345 678",
                "field_type": "text"
            }
        ]
    }
]
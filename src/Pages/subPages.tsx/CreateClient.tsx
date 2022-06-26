import React, { useEffect, useState } from "react";
import axios from "axios";
import TextBox from "../../components/muiComponents/TextBox";
import DropDown from "../../components/muiComponents/DropDown";
import DropDownMultiple from "../../components/muiComponents/DropDownMultiple";
import CommentBox from "../../components/muiComponents/CommentBox";
import StandardButton from "../../components/muiComponents/StandardButton";
import DatePicker from "../../components/muiComponents/DatePicker";
import SingleCheckbox from "../../components/muiComponents/SingleCheckBox";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

interface CreateClientProps {
  setPage: (pageName: string) => void;
}

const CreateClient = (props: CreateClientProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [plant, setPlant] = useState("");
  const [products, setProducts] = useState("");
  const [source, setSource] = useState("");
  const [projectType, setProjectType] = useState("");
  const [creditRequired, setCreditRequired] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [siteAddress, setSiteAddress] = useState("");
  const [officeAddress, setOfficeAddress] = useState("");
  const [comments, setComments] = useState("");
  const [checkBox, setCheckBox] = useState("");

  useEffect(() => {
    console.log("Plant Ran!", plant);
  }, [plant]);

  const postData = () => {
    axios
      .post("http://localhost:4000/v1/client", {
        name: name,
        phone: phone,
        email: email,
        plant: plant,
        siteAddress: siteAddress,
        projectDetails: {
          quantity: quantity,
          source: source,
          pickDate: date,
          productType: products,
          projectType: projectType,
          // projectStage: projectStage,
          officeAddress: officeAddress,
        },
        comments: comments,
      })
      .then(function (response) {
        console.log(response);
        props.setPage("Client List");
      })
      .catch(function (error) {
        console.log(error);
      });

    // console.log(
    //   name,
    //   phone,
    //   email,
    //   quantity,
    //   plant,
    //   products,
    //   source,
    //   projectType,
    //   creditRequired,
    //   date,
    //   siteAddress,
    //   officeAddress,
    //   comments,
    //   checkBox
    // );
  };

  return (
    <>
      <div>
        <TextBox setState={setName} label="Name" />
        <TextBox setState={setPhone} label="Phone" />
        <TextBox setState={setEmail} label="Email" />
      </div>
      <div>
        <TextBox setState={setQuantity} label="Quantity" />
        <DropDown
          label="Plant"
          setState={setPlant}
          list={[
            "Panagoda",
            "Beruwala",
            "Giriulla",
            "Mawenella",
            "Dambulla",
            "Thanamalwila",
            "Gonagolla",
          ]}
        />
        <DropDownMultiple
          setState={setProducts}
          label="Products"
          list={["Ready-Mix", "Cement Blocks", "Paving", "Other Precast"]}
        />
      </div>
      <div>
        <DropDown
          setState={setSource}
          label="Source"
          list={[
            "Website",
            "Online Advert",
            "Direct",
            "Inter Company",
            "Daminda",
            "Rohana",
            "Sales Team",
            "Other",
          ]}
        />
        <DropDown
          setState={setProjectType}
          label="Project Type"
          list={[
            "Apartments",
            "General Construction",
            "Domestic",
            "Commercial Building",
            "Road",
            "Water Project",
            "Other",
          ]}
        />
        <DropDown
          setState={setCreditRequired}
          label="Credit Required"
          list={["Yes", "No"]}
        />
      </div>
      <div>
        <CommentBox setState={setSiteAddress} label="Site Address" />
        <CommentBox setState={setOfficeAddress} label="Office Address" />
        <CommentBox setState={setComments} label="Comments" />
      </div>
      <div>
        <DatePicker setState={setDate} label="Est. Start Date" />
        <Box sx={{ m: 1.2 }}>
          <h4>Mark as a Priority Client{<SingleCheckbox />}</h4>
        </Box>
        <StandardButton captureClick={postData} label="Submit" />
      </div>
    </>
  );
};

export default CreateClient;

// import React, { useState } from "react";
// import TextBox from "../../components/muiComponents/TextBox";
// import DropDown from "../../components/muiComponents/DropDown";
// import DropDownMultiple from "../../components/muiComponents/DropDownMultiple";
// import CommentBox from "../../components/muiComponents/CommentBox";
// import StandardButton from "../../components/muiComponents/StandardButton";
// import DatePicker from "../../components/muiComponents/DatePicker";
// import SingleCheckbox from "../../components/muiComponents/SingleCheckBox";
// import { Stack } from "@mui/material";
// import Box from "@mui/material/Box";

// const CreateClient = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [quantity, setQuantity] = useState("");
//   const [plant, setPlant] = useState("");
//   const [products, setProducts] = useState("");
//   const [source, setSource] = useState("");
//   const [projectType, setProjectType] = useState("");
//   const [creditRequired, setCreditRequired] = useState("");
//   const [date, setDate] = useState("");
//   const [siteAddress, setSiteAddress] = useState("");
//   const [officeAddress, setOfficeAddress] = useState("");
//   const [comments, setComments] = useState("");
//   const [checkBox, setCheckBox] = useState("");

//   const handleChange = (value: string) => {
//     console.log(value);
//   };

//   const postData = () => {
//     console.log(
//       name,
//       phone,
//       email,
//       quantity,
//       plant,
//       products,
//       source,
//       projectType,
//       creditRequired,
//       date,
//       siteAddress,
//       officeAddress,
//       comments,
//       checkBox
//     );
//   };

//   return (
//     <>
//       <div>
//         <TextBox change={handleChange} label="Name" />
//         <TextBox label="Phone" />
//         <TextBox label="Email" />
//       </div>
//       <div>
//         <TextBox
//           onChange={(e: any) => {
//             console.log(e.target.value);
//           }}
//           label="Quantity"
//         />
//         <DropDown
//           label="Plant"
//           list={[
//             "Panagoda",
//             "Beruwala",
//             "Giriulla",
//             "Mawenella",
//             "Dambulla",
//             "Thanamalwila",
//             "Gonagolla",
//           ]}
//         />
//         <DropDownMultiple
//           label="Products"
//           list={["Ready-Mix", "Cement Blocks", "Paving", "Other Precast"]}
//         />
//       </div>
//       <div>
//         <DropDown
//           label="Source"
//           list={[
//             "Website",
//             "Online Advert",
//             "Direct",
//             "Inter Company",
//             "Daminda",
//             "Rohana",
//             "Sales Team",
//             "Other",
//           ]}
//         />
//         <DropDown
//           label="Project Type"
//           list={[
//             "Apartments",
//             "General Construction",
//             "Domestic",
//             "Commercial Building",
//             "Road",
//             "Water Project",
//             "Other",
//           ]}
//         />
//         <DropDown label="Credit Required" list={["Yes", "No"]} />
//       </div>
//       <div>
//         <CommentBox label="Site Address" />
//         <CommentBox label="Office Address" />
//         <CommentBox label="Comments" />
//       </div>
//       <div>
//         <DatePicker label="Est. Start Date" />
//         <Box sx={{ m: 1.2 }}>
//           <h4>Mark as a Priority Client{<SingleCheckbox />}</h4>
//         </Box>
//         <StandardButton captureClick={postData} label="Submit" />
//       </div>
//     </>
//   );
// };

// export default CreateClient;

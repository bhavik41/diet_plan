import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Label } from "../components/Label"
import { useForm } from "react-hook-form"
import Dropdown from "../components/Dropdown"
import { Link } from "react-router-dom";
import Preferences from "../components/Preference"

export const UserInfo = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

    const health_conditions = ["normal","Diabetes (Type 1, Type 2)",
    "Heart Disease (Coronary Artery Disease, Congestive Heart Failure)",
    "High Blood Pressure (Hypertension)",
    "Kidney Disease (Chronic Kidney Disease)",
    "High Cholesterol",
    "Celiac Disease",
    "Food Allergies (e.g., Peanuts, Shellfish)",
    "Food Intolerances (e.g., Lactose Intolerance, Gluten Intolerance)",
    "Digestive Issues (e.g., Irritable Bowel Syndrome (IBS), Crohn's Disease, Ulcerative Colitis)",
    "Hormonal Imbalances (e.g., Thyroid Issues, Polycystic Ovary Syndrome (PCOS))",
    "Autoimmune Diseases (e.g., Lupus, Rheumatoid Arthritis)",
    "Cancer",
    "Anemia",
    "Osteoporosis",
    "Liver Disease",
    "Metabolic Syndrome",
    "Sleep Apnea"
    ]

    const goals = [
  "Lose weight",
  "Gain muscle",
  "Maintain weight",
  "Improve overall health",
  "Reduce blood sugar levels",
  "Lower cholesterol",
  "Manage blood pressure",
  "Increase energy levels",
  "Improve gut health",
  "Reduce inflammation",
  "Support athletic performance"
]

const onSubmit = async (data) => {
    try {
      const response = await axios.post(http://localhost:3000/api/v1/, data);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

    const gender = ['male','female']

    return (
        <div className="w-full max-w-xs mx-auto mb-4 mt-4 ">

            <form onSubmit={handleSubmit(onSubmit)}>
                <Label name={"age"} />
                <Input register={register} name={"sex"} type={"number"} placeholder={"Age"}/>
                <Dropdown label={"Sex"} name={"sex"} options={gender} />
                <Label name={"Weight (kg)"} />
                <Input register={register} name={"weight"} type={"number"} placeholder={"Weight"}/>
                <Label name={"Height (cm)"} /> 
                <Input register={register} name={"height"} type={"number"} placeholder={"Height"}/>
                <Dropdown label={"Health Conditions"} name={"health_conditions"} options={health_conditions} />
                <Dropdown label={"goals"} name={"goals"} options={goals} />
                <Dropdown label={"Diet Type"} name={"diet_type"} options={goals} />
                {/* <Preferences /> */}
                {/* <Link to={"/Preferences"}>
                    <Button type={'submit'} name={'Next'}/>
                </Link> */}
                <Button type={'submit'} name={'Next'}/>
            </form>
        </div>
    )
}
import { useState, useEffect } from "react"
import axios from "axios"
import MemberComp from "./Member"

function AllMembers() {

    const [members, setMembers] = useState([])

    useEffect(() => {
        getAllMembers()
    }, [members])

    async function deleteMember(id) {
        // await axios.delete(`http://localhost:3050/sub/${id}`)
        await axios.delete(`http://localhost:3050/members/${id}`)
        alert("member deleted also from his subscriptions")
        setMembers([...members])

    }
    async function getAllMembers() {
        let { data } = await axios.get("http://localhost:3050/members")
        // if (data.length == 0) alert("There are no Members in the DB")
        setMembers(data)
        console.log("members"+members);
    }

    return <div>
        {
            members.map((member, index) => {
                return <div key={index}>< MemberComp member={member} callback={id=>deleteMember(id)} /> </div>
            })
        }
    </div>
}
export default AllMembers
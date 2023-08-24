import { contact } from "@/app/data/contacts";

export function ContactCard({ contact }: { contact: contact }) {
    return (
        <div className="bg-white drop-shadow rounded-lg hover:drop-shadow-lg duration-200 cursor-pointer">
            <div className="flex gap-4 mt-3 ml-2">

                <i className={"mx-4 mt-5 text-xl si si--color si-" + contact.icon_name}></i>

                <div className="mb-4">
                    <p className="font-semibold">{contact.name}</p>
                    <p><span className="inline-block">{contact.text1}</span><span className="inline-block">{contact.text2}</span></p>
                </div>
            </div>
        </div>
    )
}
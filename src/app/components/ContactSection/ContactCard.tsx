import { contact } from "@/app/data/contacts";
import Link from "next/link";

export function ContactCard({ contact }: { contact: contact }) {
    return (
        <Link className="bg-white drop-shadow rounded-lg hover:drop-shadow-lg duration-200" href={contact.url} target="_blank">
            <div className="flex gap-4 ml-2">

                <i className={"p-4 h-full my-auto text-2xl si si--color si-" + contact.icon_name}></i>

                <div className="mb-4 mt-3">
                    <p className="font-semibold">{contact.name}</p>
                    <p><span className="inline-block">{contact.text1}</span><span className="inline-block">{contact.text2}</span></p>
                </div>
            </div>
        </Link>
    )
}
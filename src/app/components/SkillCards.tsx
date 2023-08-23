import { roboto_mono_bold } from "../fonts";

export function SkillCards({ skills }: { skills: { name: string, icon_name: string, category: string, text1: string, text2: string }[] }) {
    return <>
        {skills.map((skill) => {
            return (
                <div className="bg-white p-3 drop-shadow rounded-lg hover:drop-shadow-lg duration-200 cursor-pointer">
                    <p className={"mt-1 bg-sky-100 inline-block px-2 py-1 rounded-full text-xs text-cyan-500 " + roboto_mono_bold.className}>{skill.category}</p>
                    <div className="flex gap-4 mt-3">

                        <img src={"https://skillicons.dev/icons?i="+skill.icon_name+"&theme=light"} />
                        <div className="">
                            <p className="font-semibold">{skill.name}</p>
                            <p><span className="inline-block">{skill.text1}</span><span className="inline-block">{skill.text2}</span></p>
                        </div>
                    </div>
                </div>
            )
        })}
    </>
}
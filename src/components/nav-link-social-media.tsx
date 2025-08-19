import Link from "next/link";
import { Button } from "./ui/button";
import { LinkedinLogo } from "phosphor-react";

export function SocialMedia(){
    return(
        <div>
            <Link className="" href={""}>
            <Button
            className=""
            >
                <LinkedinLogo/>
            </Button>
            </Link>
        </div>
    )
}
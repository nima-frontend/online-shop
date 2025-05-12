import { GitHub, Telegram, LinkedIn } from "@mui/icons-material"
import Link from "next/link"


export default function SocialIcons() {
  return (
    <div className="w-full md:w-1/2 flex gap-6 text-gray-400 justify-center items-center">
        <Link href='https://github.com/nima-frontend'>
            <GitHub sx={{width:22}} />
        </Link>
        <Link href='https://www.linkedin.com/in/nima-pourdad-b2a5bb331'>
            <LinkedIn sx={{width:22}} />
        </Link>
        <Link href='https://t.me/nimapourdad'>
            <Telegram sx={{width:22}} />
        </Link>

    </div>
  )
}

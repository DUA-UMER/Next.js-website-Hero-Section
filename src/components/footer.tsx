import Link from "next/link";


export default function Footer () {
    return (
        <div className="footer">
            <ul className="footer-button">
                <Link href={"terms-condition"}>
                <li>Terms & condition</li>
                </Link>
                <Link href={"links"}>
                <li>Links</li>
                </Link>
                <Link href={"products"}>
                <li>products</li>
                </Link>
                

            </ul>

        </div>
    )
}
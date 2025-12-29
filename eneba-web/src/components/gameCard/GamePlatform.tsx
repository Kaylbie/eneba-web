import steam_icon from "../../assets/steam_icon.png";
import nintendo_icon from "../../assets/nintendo_icon.png"
import xbox_icon from "../../assets/xbox_icon.png"
import ea_icon from "../../assets/ea_icon.png"


interface GamePlatformProps {
    platform: string
}


const GamePlatform = ({
    platform
}: GamePlatformProps) => {
    let icon = steam_icon

    switch (platform) {
        case "Steam":
            icon = steam_icon
            break;
        case "Nintendo":
            icon = nintendo_icon
            break;
        case "Xbox Live":
            icon = xbox_icon
            break;
        case "EA App":
            icon = ea_icon
            break;
        default:
            icon = steam_icon
            break;
    }

    return (
        <>
            <img src={icon} className="size-4 mr-1" />
            <span className="text-[0.6rem]">{platform}</span>
        </>
    )
};

export default GamePlatform;
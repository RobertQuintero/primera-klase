import { FC } from "react";
import { Switch, SwitchProps } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
export interface ThemeSwitchProps {
    className?: string;
    classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
    className,
    classNames,
}) => {
    const { theme, setTheme } = useTheme();
    const isSSR = useIsSSR();

    const onChange = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };

    return (
        <Switch
            className={className}
            classNames={{wrapper:"rounded-none",thumb:"rounded-none" }}
            defaultSelected={theme === "light" || isSSR}
            onChange={onChange}
            size="sm"

            color="default"
			aria-label={`Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`}
        >
        </Switch>
    );
};
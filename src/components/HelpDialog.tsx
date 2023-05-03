import React from "react";
import { FaDiscord, FaGithub } from "react-icons/fa";
import Dialog from "./Dialog";
import { useTranslation } from "next-i18next";
import { authEnabled } from "../utils/env-helper";

export default function HelpDialog({
  show,
  close,
}: {
  show: boolean;
  close: () => void;
}) {
  const { t } = useTranslation("help");

  return (
    <Dialog
      header={`${t("welcome-to-AutoGPT-Next-Web")} 🤖`}
      isShown={show}
      close={close}
    >
      <div className="text-md relative flex-auto p-2 leading-relaxed">
        <p>
          <strong>AutoGPT</strong> {t("usage")} 🚀
        </p>
        <div>
          <br />
          {t("working-on")}
          <ul className="ml-5 list-inside list-disc">
            <li>{t("long-term-memory")} 🧠</li>
            <li>{t("web-browsing")} 🌐</li>
            <li>{t("interaction-with-websites-and-people")} 👨‍👩‍👦</li>
          </ul>
          <br />
          <p className="mt-2">{t("follow-our-footsteps")}</p>
        </div>
      </div>
    </Dialog>
  );
}

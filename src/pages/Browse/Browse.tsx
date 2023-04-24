import { Contact } from "@components/Contact/Contact";
import { Title } from "@components/Title/Title";
import { SideMenu } from "@elements/SideMenu/SideMenu";
import { ContentBrowseLayout } from "@skeleton/layout/ContentBrowseLayout/ContentBrowseLayout";
import { Flex } from "@skeleton/ui/Flex/Flex";
import { Input } from "@skeleton/ui/Input/Input";
import { useTranslation } from "react-i18next";

export const Browse = () => {
  const { t } = useTranslation();

  const side = <SideMenu />;

  const search = (
    <>
      <Input label="search" name="search" />
    </>
  );

  const content = (
    <>
      <Title>{t("contacts.browse.title")}</Title>
      <Flex>
        <Contact name="John Harnold" />
        <Contact name="John Harnold" />
        <Contact name="John Harnold" />
      </Flex>
    </>
  );

  return (
    <>
      <ContentBrowseLayout sidebar={side} search={search}>
        {content}
      </ContentBrowseLayout>
    </>
  );
};

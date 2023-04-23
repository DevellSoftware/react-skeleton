import { Contact } from "@components/Contact/Contact";
import { SideMenu } from "@elements/SideMenu/SideMenu";
import { ContentBrowseLayout } from "@skeleton/layout/ContentBrowseLayout/ContentBrowseLayout";
import { Flex } from "@skeleton/ui/Flex/Flex";
import { Input } from "@skeleton/ui/Input/Input";

export const Browse = () => {
  const side = <SideMenu />;

  const search = (
    <>
      <Input label="search" name="search" />
    </>
  );

  const content = (
    <>
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

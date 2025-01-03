import React from 'react';
import { Dropdown } from '@patternfly/react-core/dist/dynamic/components/Dropdown';
import { DropdownList } from '@patternfly/react-core/dist/dynamic/components/Dropdown';
import { MenuToggle, MenuToggleElement } from '@patternfly/react-core/dist/dynamic/components/MenuToggle';
import DownloadYaml from '../DownloadYaml/DownloadYaml';
import DownloadAttribution from '../DownloadAttribution/DownloadAttribution';
import DownloadIcon from '@patternfly/react-icons/dist/esm/icons/download-icon';
import { SkillFormData } from '@/types';

interface Props {
  skillFormData: SkillFormData;
  githubUsername: string | undefined;
}

export const DownloadDropdown: React.FunctionComponent<Props> = ({ skillFormData, githubUsername }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onToggleClick = () => {
    setIsOpen(!isOpen);
  };

  const onSelect = () => {
    // eslint-disable-next-line no-console
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      onSelect={onSelect}
      onOpenChange={(isOpen: boolean) => setIsOpen(isOpen)}
      toggle={(toggleRef: React.Ref<MenuToggleElement>) => (
        <MenuToggle ref={toggleRef} onClick={onToggleClick} isExpanded={isOpen}>
          <DownloadIcon /> Download
        </MenuToggle>
      )}
      ouiaId="DownloadDropdown"
      shouldFocusToggleOnSelect
    >
      <DropdownList>
        <DownloadYaml skillFormData={skillFormData} githubUsername={githubUsername} />
        <DownloadAttribution skillFormData={skillFormData} />
      </DropdownList>
    </Dropdown>
  );
};

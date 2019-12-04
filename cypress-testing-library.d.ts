import {
    SelectorMatcherOptions as DomSelectorMatcherOptions,
    Matcher,
    MatcherOptions,
    getByTestId,
} from 'dom-testing-library';

import { } from 'cypress';
declare global {
    export namespace Cypress {
        interface SelectorMatcherOptions extends DomSelectorMatcherOptions {
            timeout: number;
        }

        interface FileToUpload {
            name: string;
            type: string;
        }
        type GetByAttribute = (
            id: Matcher,
            options?: Partial<MatcherOptions>
        ) => Chainable;
        type QueryByAttribute = (
            id: Matcher,
            options?: Partial<MatcherOptions>
        ) => Chainable;
        type QueryByText = (
            id: Matcher,
            options?: Partial<SelectorMatcherOptions>
        ) => Chainable;
        type AllByText = (
            id: Matcher,
            options?: Partial<SelectorMatcherOptions>
        ) => Chainable;
        type GetByText = (
            id: Matcher,
            options?: Partial<SelectorMatcherOptions>
        ) => Chainable;
        type DeleteAllEmails = () => Chainable;
        type GetAllEmails = (minimumEmails?: number) => Chainable;
        type ParseEncryptionKey = (key: string) => Chainable;
        type DecryptConfigurationFile = (
            key: any,
            iv: any,
            encryptedConfiguration: any
        ) => Chainable;
        type LoadFixtures = (filePath: string) => Chainable;
        type LoadLocalFixtures = (fixtures: {}) => Chainable;
        type UploadFiles = (files: FileToUpload[]) => Chainable;

        interface Chainable {
            getByPlaceholderText: GetByAttribute;
            queryByText: QueryByText;
            queryAllByText: AllByText;
            queryByDisplayValue: QueryByText;
            getByText: GetByText;
            getAllByText: AllByText;
            queryByLabelText: QueryByText;
            queryAllByLabelText: AllByText;
            getByLabelText: GetByText;
            getAllByLabelText: AllByText;
            getByAltText: GetByAttribute;
            getByTestId: GetByAttribute;
            queryByTestId: QueryByText;
            getByTitle: GetByAttribute;
            getByValue: GetByAttribute;
            getByDisplayValue: GetByAttribute;
            getByRole: GetByAttribute;
            queryByRole: QueryByAttribute;
            deleteAllEmails: DeleteAllEmails;
            getAllByRole: AllByText;
            getAllEmails: GetAllEmails;
            parseEncryptionKey: ParseEncryptionKey;
            decryptConfigurationFile: DecryptConfigurationFile;
            loadFixtures: LoadFixtures;
            loadLocalFixtures: LoadLocalFixtures;
            uploadFiles: UploadFiles;
        }
    }
}

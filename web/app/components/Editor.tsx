'use client';
import { BlockNoteEditor } from '@blocknote/core';
import '@blocknote/core/fonts/inter.css';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/mantine/style.css';
import { useCreateBlockNote } from '@blocknote/react';
import { useRoom } from '@liveblocks/react/suspense';
import { LiveblocksYjsProvider } from '@liveblocks/yjs';
import { useEffect, useState } from 'react';
import * as Y from 'yjs';

type EditorProps = {
    doc: Y.Doc;
    provider: any;
};

export const Editor = () => {
    const room = useRoom();
    const [doc, setDoc] = useState<Y.Doc>();
    const [provider, setProvider] = useState<any>();

    useEffect(() => {
        const yDoc = new Y.Doc();
        const yProvider = new LiveblocksYjsProvider(room, yDoc);
        setDoc(yDoc);
        setProvider(yProvider);

        return () => {
            yDoc?.destroy();
            yProvider?.destroy();
        };
    }, [room]);

    if (!doc || !provider) {
        return null;
    }

    return <BlockNote doc={doc} provider={provider} />;
};

const BlockNote = ({ doc, provider }: EditorProps) => {
    const editor: BlockNoteEditor = useCreateBlockNote({
        collaboration: {
            provider,
            fragment: doc.getXmlFragment('document-store'),
            user: {
                name: 'User',
                color: '#ff0000'
            }
        }
    });

    return <BlockNoteView editor={editor} />;
};

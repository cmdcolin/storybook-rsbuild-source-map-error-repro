import React from 'react'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view'

export const OneLinearGenomeView = () => {
  const state = createViewState({
    assembly: {
      name: 'GRCh38',
      aliases: ['hg38'],
      sequence: {
        type: 'ReferenceSequenceTrack',
        trackId: 'GRCh38-ReferenceSequenceTrack',
        adapter: {
          type: 'BgzipFastaAdapter',
          fastaLocation: {
            uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz',
          },
          faiLocation: {
            uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.fai',
          },
          gziLocation: {
            uri: 'https://jbrowse.org/genomes/GRCh38/fasta/hg38.prefix.fa.gz.gzi',
          },
        },
      },
      refNameAliases: {
        adapter: {
          type: 'RefNameAliasAdapter',
          location: {
            uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/hg38_aliases.txt',
          },
        },
      },
    },
    tracks: [
      {
        type: 'FeatureTrack',
        trackId: 'genes',
        name: 'NCBI RefSeq Genes',
        assemblyNames: ['GRCh38'],
        category: ['Genes'],
        adapter: {
          type: 'Gff3TabixAdapter',
          gffGzLocation: {
            uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz',
          },
          index: {
            location: {
              uri: 'https://s3.amazonaws.com/jbrowse.org/genomes/GRCh38/ncbi_refseq/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.tbi',
            },
          },
        },
        textSearching: {
          textSearchAdapter: {
            type: 'TrixTextSearchAdapter',
            textSearchAdapterId: 'gff3tabix_genes-index',
            ixFilePath: {
              uri: 'https://jbrowse.org/genomes/GRCh38/ncbi_refseq/trix/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.ix',
            },
            ixxFilePath: {
              uri: 'https://jbrowse.org/genomes/GRCh38/ncbi_refseq/trix/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz.ixx',
            },
            metaFilePath: {
              uri: 'https://jbrowse.org/genomes/GRCh38/ncbi_refseq/trix/GCA_000001405.15_GRCh38_full_analysis_set.refseq_annotation.sorted.gff.gz_meta.json',
            },
            assemblyNames: ['GRCh38'],
          },
        },
      },
      {
        type: 'FeatureTrack',
        trackId: 'repeats_hg38',
        name: 'Repeats',
        assemblyNames: ['hg38'],
        category: ['Annotation'],
        adapter: {
          type: 'BigBedAdapter',
          bigBedLocation: {
            uri: 'https://jbrowse.org/genomes/GRCh38/repeats.bb',
            locationType: 'UriLocation',
          },
        },
      },
    ],
    // use 1-based coordinates for locstring
    location: 'chr1:1-100,000,000',
  })
  return <JBrowseLinearGenomeView viewState={state} />
}

export default { title: 'Source code for examples' }

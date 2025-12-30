--
-- PostgreSQL database cluster dump
--

\restrict IauMHa8ReXPjgDpNNpdWLIzwSX9I0AoWfkPMwcykDSozcIIFnYGvbK9LhNvdwhB

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE postgres;
ALTER ROLE postgres WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS PASSWORD 'SCRAM-SHA-256$4096:Mvuq4XgyVRXcPhuv/UlknA==$q+NKgizGapQwf8v+dMAwJToc47m1QXe3kYAtMbqG+HM=:yyd5osv87qu9Y1f19GgSUVHCRPDlJ9zsAoadWV4O5ls=';

--
-- User Configurations
--








\unrestrict IauMHa8ReXPjgDpNNpdWLIzwSX9I0AoWfkPMwcykDSozcIIFnYGvbK9LhNvdwhB

--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

\restrict CnGZU4fTceMwXGciUN9aU1ZjK6iPO7SeYJhg1Uf1pG9y5nV0nfnLtIwT1FIiy8X

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- PostgreSQL database dump complete
--

\unrestrict CnGZU4fTceMwXGciUN9aU1ZjK6iPO7SeYJhg1Uf1pG9y5nV0nfnLtIwT1FIiy8X

--
-- Database "mydb" dump
--

--
-- PostgreSQL database dump
--

\restrict Wvvx0rlqjbLkpB2AD9wCmsx53kdDoUHvCUnrzRhbUFexPFkJuz1lBo6WJ2FGzco

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: mydb; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE mydb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE mydb OWNER TO postgres;

\unrestrict Wvvx0rlqjbLkpB2AD9wCmsx53kdDoUHvCUnrzRhbUFexPFkJuz1lBo6WJ2FGzco
\connect mydb
\restrict Wvvx0rlqjbLkpB2AD9wCmsx53kdDoUHvCUnrzRhbUFexPFkJuz1lBo6WJ2FGzco

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Game; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Game" (
    id integer NOT NULL,
    title text NOT NULL,
    "imageSrc" text NOT NULL,
    region text NOT NULL,
    price numeric(65,30) NOT NULL,
    likes integer NOT NULL,
    "isAvailable" boolean NOT NULL,
    platform text NOT NULL,
    "gameName" text NOT NULL,
    discount integer NOT NULL
);


ALTER TABLE public."Game" OWNER TO postgres;

--
-- Name: Game_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Game_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Game_id_seq" OWNER TO postgres;

--
-- Name: Game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Game_id_seq" OWNED BY public."Game".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Game id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Game" ALTER COLUMN id SET DEFAULT nextval('public."Game_id_seq"'::regclass);


--
-- Data for Name: Game; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Game" (id, title, "imageSrc", region, price, likes, "isAvailable", platform, "gameName", discount) FROM stdin;
1	Split Fiction EA App Key (PC) GLOBAL	https://imgproxy.eneba.games/Q2TQx-8Q9sLo8eG7ewRtxv-SsUManLPk_HUUrIvLivo/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/cHNhQjAwRmRUOHJK/dW9uVGhGXzN5dksz/cjBuUWhDY0IwX2lB/VDh4Q25NLmpwZw	Global	37.400000000000000000000000000000	715	t	EA App	Split Fiction	0
2	Split Fiction (Xbox Series X|S) XBOX LIVE Key EUROPE	https://imgproxy.eneba.games/Q2TQx-8Q9sLo8eG7ewRtxv-SsUManLPk_HUUrIvLivo/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/cHNhQjAwRmRUOHJK/dW9uVGhGXzN5dksz/cjBuUWhDY0IwX2lB/VDh4Q25NLmpwZw	Europe	36.890000000000000000000000000000	574	t	Xbox Live	Split Fiction	0
3	Split Fiction Steam Key (PC) GLOBAL	https://imgproxy.eneba.games/Q2TQx-8Q9sLo8eG7ewRtxv-SsUManLPk_HUUrIvLivo/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/cHNhQjAwRmRUOHJK/dW9uVGhGXzN5dksz/cjBuUWhDY0IwX2lB/VDh4Q25NLmpwZw	Global	51.480000000000000000000000000000	1170	t	Steam	Split Fiction	0
4	Split Fiction (Xbox Series X|S) XBOX LIVE Key GLOBAL	https://imgproxy.eneba.games/Q2TQx-8Q9sLo8eG7ewRtxv-SsUManLPk_HUUrIvLivo/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/cHNhQjAwRmRUOHJK/dW9uVGhGXzN5dksz/cjBuUWhDY0IwX2lB/VDh4Q25NLmpwZw	Global	39.770000000000000000000000000000	1078	t	Xbox Live	Split Fiction	0
5	Split Fiction (Nintendo Switch 2) eShop Key EUROPE	https://imgproxy.eneba.games/ixMYOeMFdstZ_-W0KjsfDFLPaUZm3I3vael9xQiSTBc/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9z/blMxMVM4SURqcHFF/NzZDLU9HdDRZMXJD/X1YzR1gzSTBVX3ZK/WEVMcTdjLmpwZw	Europe	37.610000000000000000000000000000	321	t	Nintendo	Split Fiction	0
6	FIFA 23 (PC) Origin Key GLOBAL	https://imgproxy.eneba.games/4UToMgFFMU00IsoD9w944T8duNGEUlZowGdKtBzpe1Q/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy84/bk9Hdnk1M0Jic29r/aEFPNnNkelQ2M3dJ/QmtQZU00czBxQkli/RVFlM1lzLmpwZw	Global	68.780000000000000000000000000000	23934	t	Origin	FIFA 23	64
7	EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S Key GLOBAL	https://imgproxy.eneba.games/d-zgISW24fdWtAPI6tbYk7FZrO3cCSESflqJa41Fe_w/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy8z/U29yOWt3eExGZDVL/Nmx5QWJ0RGVmd2tG/MmRPbnBkRVd3bWJY/UGxhMEhnLmpwZw	Global	27.890000000000000000000000000000	1807	t	Xbox Live	FIFA 23	0
8	FIFA 23 (EN/PL/CZ/TR) (PC) Origin Key GLOBAL	https://imgproxy.eneba.games/nS317wP0rGLq69c0m6wPdKWKyzw317fjyWE3RKtRJ0s/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9L/dzJBX3dlOHM4RVdi/ZUh5NS1xVnpKdWlO/TWcxOFdRZFNOMDdM/c3UzMWRZLmpwZw	Global	68.780000000000000000000000000000	1546	t	Origin	FIFA 23	65
9	EA SPORTS™ FIFA 23 Ultimate Edition (PC) Steam Key GLOBAL	https://imgproxy.eneba.games/XVKqL0bnS632gjQyfO7TfEj0Zdaixhzgu5pC_nAjcts/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9x/V0I1Y2ktTlRHOU1s/WndWVFlSX2wwMHpj/M3ktQzRxYnVhSjht/QTdFc0dzLmpwZw	Global	96.330000000000000000000000000000	385	t	Steam	FIFA 23	0
10	Red Dead Redemption 2 (Xbox One) Xbox Live Key EUROPE	https://imgproxy.eneba.games/boKfmbJszO4VXtU_SHoA_oUunQK_WvwGV-_hpdHOuI4/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9o/WDdQZ0hzMHBrOHhw/QkhZRHZ3VjFWczBB/Y3BJRHcxNUhtSWFm/ZDhZUmVFLmpwZWc	Europe	14.720000000000000000000000000000	2340	t	Xbox Live	Red Dead Redemption 2	0
11	Red Dead Redemption 2 Rockstar Games Launcher Key EMEA	https://imgproxy.eneba.games/xDjvqlnJsB7WzRbhzdrTn5TvRRSgQ4nfuG_DPKo2bPE/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy82/TTFxUDc2Qi1qNnZk/WDBUNGJGQ0hnSmVY/OTlNYUtCcFhGeGJw/aWYxTXFZLmpwZWc	Europe	12.660000000000000000000000000000	513	t	Rockstar Games Launcher	Red Dead Redemption 2	0
12	ARC Raiders - Standard Edition (PC / Xbox Series X|S) XBOX LIVE Key UNITED KINGDOM	https://imgproxy.eneba.games/dHZg7OjtlznS_qV_hClgZ75SRcxYWeQ9UzelZD6zFJM/rs:fit:700/ar:1/czM6Ly9wcm9kdWN0/cy5lbmViYS5nYW1l/cy9wcm9kdWN0cy9H/R2FOdzBHdk9qaXlr/NW96M2IyR1FlSXNH/UjVSd1RfOXB4X1hn/clRreHJnLmpwZw	Europe	33.200000000000000000000000000000	29	t	Xbox Live	ARC Raiders	0
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
415fe180-43fd-4607-963c-7efa2e4cfeb5	6e7ab901af7e953aec41ffc5cbb684660595478f1ae657f141f71440577b0c6b	2025-12-29 19:23:56.281828+00	20251226161853_init	\N	\N	2025-12-29 19:23:56.274321+00	1
070304e5-a0a7-45fa-8829-fae570f2b960	4f6e82d4e846d047c2846a54f1e6b3ff3a09833b90b22984da540094fd82d8d3	2025-12-29 19:23:56.28632+00	20251229191819_add_game_name	\N	\N	2025-12-29 19:23:56.282956+00	1
33fe9e41-6b46-4eb8-91a6-3f8ccc3da688	85724accbe3fea40a5e77af6de549b20065fa8b4818085ca94f4c2a1c0127228	2025-12-29 21:18:45.727875+00	20251229211845_add_game_fields	\N	\N	2025-12-29 21:18:45.724904+00	1
\.


--
-- Name: Game_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Game_id_seq"', 12, true);


--
-- Name: Game Game_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Game"
    ADD CONSTRAINT "Game_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict Wvvx0rlqjbLkpB2AD9wCmsx53kdDoUHvCUnrzRhbUFexPFkJuz1lBo6WJ2FGzco

--
-- Database "postgres" dump
--

\connect postgres

--
-- PostgreSQL database dump
--

\restrict jsfE1P1hUaTh4KPvougwmMydEzz4h8gUie80hAxdPRc2J6ep7LtqhUrvJHCnq0a

-- Dumped from database version 18.1 (Debian 18.1-1.pgdg13+2)
-- Dumped by pg_dump version 18.1 (Debian 18.1-1.pgdg13+2)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: pg_trgm; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pg_trgm WITH SCHEMA public;


--
-- Name: EXTENSION pg_trgm; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pg_trgm IS 'text similarity measurement and index searching based on trigrams';


--
-- PostgreSQL database dump complete
--

\unrestrict jsfE1P1hUaTh4KPvougwmMydEzz4h8gUie80hAxdPRc2J6ep7LtqhUrvJHCnq0a

--
-- PostgreSQL database cluster dump complete
--


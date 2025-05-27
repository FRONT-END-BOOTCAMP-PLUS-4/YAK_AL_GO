-- CreateTable
CREATE TABLE "answers" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "is_accepted" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "qna_id" INTEGER NOT NULL,
    "content" JSONB NOT NULL,
    "content_html" TEXT,

    CONSTRAINT "answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "comments" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "healths" (
    "id" SERIAL NOT NULL,
    "health_name" VARCHAR(100) NOT NULL,

    CONSTRAINT "healths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inventories" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "itemSeq" TEXT NOT NULL,
    "hpid" TEXT NOT NULL,

    CONSTRAINT "inventories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_times" (
    "id" SERIAL NOT NULL,
    "medi_time" INTEGER NOT NULL,
    "userMediId" INTEGER NOT NULL,

    CONSTRAINT "medi_times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medicines" (
    "item_seq" TEXT NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "entp_name" VARCHAR(255),
    "item_permit_date" TIMESTAMP(3),
    "etc_otc_code" VARCHAR(50),
    "class_no" VARCHAR(100),
    "chart" TEXT,
    "bar_code" VARCHAR(50),
    "material_name" TEXT,
    "ee_doc_id" VARCHAR(255),
    "bizrno" VARCHAR(20),
    "cancel_date" TIMESTAMP(3),
    "cancel_name" VARCHAR(100),
    "change_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "edi_code" VARCHAR(50),
    "insert_file" VARCHAR(255),
    "nb_doc_id" VARCHAR(255),
    "pack_unit" VARCHAR(255),
    "reexam_date" TIMESTAMP(3),
    "reexam_target" VARCHAR(255),
    "storage_method" VARCHAR(255),
    "type_code" VARCHAR(10),
    "type_name" VARCHAR(100),
    "ud_doc_id" VARCHAR(255),
    "updated_at" TIMESTAMP(3) NOT NULL,
    "valid_term" VARCHAR(100),

    CONSTRAINT "medicines_pkey" PRIMARY KEY ("item_seq")
);

-- CreateTable
CREATE TABLE "pharmacies" (
    "hpid" TEXT NOT NULL,
    "duty_addr" VARCHAR(255),
    "duty_mapimg" VARCHAR(255),
    "duty_name" VARCHAR(255) NOT NULL,
    "duty_tel1" VARCHAR(50),
    "duty_time1c" VARCHAR(10),
    "duty_time1s" VARCHAR(10),
    "duty_time2c" VARCHAR(10),
    "duty_time2s" VARCHAR(10),
    "duty_time3c" VARCHAR(10),
    "duty_time3s" VARCHAR(10),
    "duty_time4c" VARCHAR(10),
    "duty_time4s" VARCHAR(10),
    "duty_time5c" VARCHAR(10),
    "duty_time5s" VARCHAR(10),
    "duty_time6c" VARCHAR(10),
    "duty_time6s" VARCHAR(10),
    "duty_time7c" VARCHAR(10),
    "duty_time7s" VARCHAR(10),
    "post_cdn1" VARCHAR(10),
    "post_cdn2" VARCHAR(10),
    "wgs84_lat" DECIMAL(10,7),
    "wgs84_lon" DECIMAL(10,7),

    CONSTRAINT "pharmacies_pkey" PRIMARY KEY ("hpid")
);

-- CreateTable
CREATE TABLE "posts_tags" (
    "id" SERIAL NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "posts_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "content_html" TEXT,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qna_tags" (
    "id" SERIAL NOT NULL,
    "tag_id" INTEGER NOT NULL,
    "qna_id" INTEGER NOT NULL,

    CONSTRAINT "qna_tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qnas" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "user_id" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "content_html" TEXT,

    CONSTRAINT "qnas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tags" (
    "id" SERIAL NOT NULL,
    "tagName" VARCHAR(100) NOT NULL,

    CONSTRAINT "tags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_healths" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "healthId" INTEGER NOT NULL,

    CONSTRAINT "user_healths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_medis" (
    "id" SERIAL NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "userId" TEXT NOT NULL,
    "itemSeq" TEXT NOT NULL,

    CONSTRAINT "user_medis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255),
    "photo" VARCHAR(255),
    "name" VARCHAR(100),
    "birthyear" INTEGER,
    "gender" VARCHAR(10),
    "member_type" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),
    "hpid" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_interactions" (
    "id" SERIAL NOT NULL,
    "dur_seq" VARCHAR(50),
    "type_code" VARCHAR(10),
    "type_name" VARCHAR(50),
    "mix" VARCHAR(20),
    "ingr_code" VARCHAR(50),
    "ingr_kor_name" VARCHAR(255),
    "ingr_eng_name" VARCHAR(255),
    "mix_ingr" TEXT,
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "entp_name" VARCHAR(255),
    "chart" TEXT,
    "form_code" VARCHAR(50),
    "etc_otc_code" VARCHAR(10),
    "class_code" VARCHAR(50),
    "form_name" VARCHAR(100),
    "etc_otc_name" VARCHAR(50),
    "class_name" VARCHAR(255),
    "main_ingr" TEXT,
    "mixture_dur_seq" VARCHAR(50),
    "mixture_mix" VARCHAR(20),
    "mixture_ingr_code" VARCHAR(50),
    "mixture_ingr_kor_name" VARCHAR(255),
    "mixture_ingr_eng_name" VARCHAR(255),
    "mixture_item_seq" VARCHAR(50),
    "mixture_item_name" VARCHAR(255),
    "mixture_entp_name" VARCHAR(255),
    "mixture_form_code" VARCHAR(50),
    "mixture_etc_otc_code" VARCHAR(10),
    "mixture_class_code" VARCHAR(50),
    "mixture_form_name" VARCHAR(100),
    "mixture_etc_otc_name" VARCHAR(50),
    "mixture_class_name" VARCHAR(255),
    "mixture_main_ingr" TEXT,
    "notification_date" VARCHAR(20),
    "prohbt_content" TEXT,
    "remark" TEXT,
    "item_permit_date" VARCHAR(20),
    "mixture_item_permit_date" VARCHAR(20),
    "mixture_chart" TEXT,
    "change_date" VARCHAR(20),
    "mixture_change_date" VARCHAR(20),
    "bizrno" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_interactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_age_limits" (
    "id" SERIAL NOT NULL,
    "type_name" VARCHAR(50),
    "mix_type" VARCHAR(20),
    "ingr_code" VARCHAR(50),
    "ingr_eng_name" VARCHAR(255),
    "ingr_name" VARCHAR(255),
    "mix_ingr" TEXT,
    "form_name" VARCHAR(100),
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_permit_date" VARCHAR(20),
    "entp_name" VARCHAR(255),
    "chart" TEXT,
    "class_code" VARCHAR(50),
    "class_name" VARCHAR(255),
    "etc_otc_name" VARCHAR(50),
    "main_ingr" TEXT,
    "notification_date" VARCHAR(20),
    "prohbt_content" TEXT,
    "remark" TEXT,
    "ingr_eng_name_full" VARCHAR(500),
    "change_date" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_age_limits_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_pregnancy_warnings" (
    "id" SERIAL NOT NULL,
    "type_name" VARCHAR(50),
    "mix_type" VARCHAR(20),
    "ingr_code" VARCHAR(50),
    "ingr_eng_name" VARCHAR(255),
    "ingr_name" VARCHAR(255),
    "mix_ingr" TEXT,
    "form_name" VARCHAR(100),
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_permit_date" VARCHAR(20),
    "entp_name" VARCHAR(255),
    "chart" TEXT,
    "class_code" VARCHAR(50),
    "class_name" VARCHAR(255),
    "etc_otc_name" VARCHAR(50),
    "main_ingr" TEXT,
    "notification_date" VARCHAR(20),
    "prohbt_content" TEXT,
    "remark" TEXT,
    "ingr_eng_name_full" VARCHAR(500),
    "change_date" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_pregnancy_warnings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_elderly_cautions" (
    "id" SERIAL NOT NULL,
    "type_name" VARCHAR(50),
    "mix_type" VARCHAR(20),
    "ingr_code" VARCHAR(50),
    "ingr_eng_name" VARCHAR(255),
    "ingr_name" VARCHAR(255),
    "mix_ingr" TEXT,
    "form_name" VARCHAR(100),
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_permit_date" VARCHAR(20),
    "entp_name" VARCHAR(255),
    "chart" TEXT,
    "class_code" VARCHAR(50),
    "class_name" VARCHAR(255),
    "etc_otc_name" VARCHAR(50),
    "main_ingr" TEXT,
    "notification_date" VARCHAR(20),
    "prohbt_content" TEXT,
    "remark" TEXT,
    "ingr_eng_name_full" VARCHAR(500),
    "change_date" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_elderly_cautions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_dose_cautions" (
    "id" SERIAL NOT NULL,
    "type_name" VARCHAR(50),
    "mix_type" VARCHAR(20),
    "ingr_code" VARCHAR(50),
    "ingr_eng_name" VARCHAR(255),
    "ingr_name" VARCHAR(255),
    "mix_ingr" TEXT,
    "form_name" VARCHAR(100),
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_permit_date" VARCHAR(20),
    "entp_name" VARCHAR(255),
    "chart" TEXT,
    "class_code" VARCHAR(50),
    "class_name" VARCHAR(255),
    "etc_otc_name" VARCHAR(50),
    "main_ingr" TEXT,
    "notification_date" VARCHAR(20),
    "prohbt_content" TEXT,
    "remark" TEXT,
    "ingr_eng_name_full" VARCHAR(500),
    "change_date" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_dose_cautions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_period_warnings" (
    "id" SERIAL NOT NULL,
    "type_name" VARCHAR(50),
    "mix_type" VARCHAR(20),
    "ingr_code" VARCHAR(50),
    "ingr_eng_name" VARCHAR(255),
    "ingr_name" VARCHAR(255),
    "mix_ingr" TEXT,
    "form_name" VARCHAR(100),
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_permit_date" VARCHAR(20),
    "entp_name" VARCHAR(255),
    "chart" TEXT,
    "class_code" VARCHAR(50),
    "class_name" VARCHAR(255),
    "etc_otc_name" VARCHAR(50),
    "main_ingr" TEXT,
    "notification_date" VARCHAR(20),
    "prohbt_content" TEXT,
    "remark" TEXT,
    "ingr_eng_name_full" VARCHAR(500),
    "change_date" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_period_warnings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_duplicate_effects" (
    "id" SERIAL NOT NULL,
    "dur_seq" VARCHAR(50),
    "effect_name" VARCHAR(255),
    "type_name" VARCHAR(50),
    "ingr_code" VARCHAR(50),
    "ingr_name" VARCHAR(255),
    "ingr_eng_name" VARCHAR(255),
    "form_code_name" VARCHAR(100),
    "mix" VARCHAR(20),
    "mix_ingr" TEXT,
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_permit_date" VARCHAR(20),
    "chart" TEXT,
    "entp_name" VARCHAR(255),
    "form_code" VARCHAR(50),
    "form_name" VARCHAR(100),
    "etc_otc_code" VARCHAR(10),
    "etc_otc_name" VARCHAR(50),
    "class_code" VARCHAR(50),
    "class_name" VARCHAR(255),
    "main_ingr" TEXT,
    "notification_date" VARCHAR(20),
    "prohbt_content" TEXT,
    "remark" TEXT,
    "ingr_eng_name_full" VARCHAR(500),
    "change_date" VARCHAR(20),
    "bizrno" VARCHAR(20),
    "sers_name" VARCHAR(255),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_duplicate_effects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medi_sr_warnings" (
    "id" SERIAL NOT NULL,
    "type_name" VARCHAR(50),
    "item_seq" VARCHAR(50) NOT NULL,
    "item_name" VARCHAR(255) NOT NULL,
    "item_permit_date" VARCHAR(20),
    "form_code_name" VARCHAR(100),
    "entp_name" VARCHAR(255),
    "chart" TEXT,
    "class_code" VARCHAR(50),
    "class_name" VARCHAR(255),
    "etc_otc_name" VARCHAR(50),
    "mix" VARCHAR(20),
    "main_ingr" TEXT,
    "prohbt_content" TEXT,
    "remark" TEXT,
    "change_date" VARCHAR(20),
    "bizrno" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medi_sr_warnings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "medicines_item_name_idx" ON "medicines"("item_name");

-- CreateIndex
CREATE INDEX "medicines_entp_name_idx" ON "medicines"("entp_name");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "medi_interactions_item_seq_idx" ON "medi_interactions"("item_seq");

-- CreateIndex
CREATE INDEX "medi_interactions_mixture_item_seq_idx" ON "medi_interactions"("mixture_item_seq");

-- CreateIndex
CREATE INDEX "medi_interactions_ingr_code_idx" ON "medi_interactions"("ingr_code");

-- CreateIndex
CREATE INDEX "medi_interactions_mixture_ingr_code_idx" ON "medi_interactions"("mixture_ingr_code");

-- CreateIndex
CREATE INDEX "medi_age_limits_item_seq_idx" ON "medi_age_limits"("item_seq");

-- CreateIndex
CREATE INDEX "medi_age_limits_ingr_code_idx" ON "medi_age_limits"("ingr_code");

-- CreateIndex
CREATE INDEX "medi_age_limits_type_name_idx" ON "medi_age_limits"("type_name");

-- CreateIndex
CREATE INDEX "medi_pregnancy_warnings_item_seq_idx" ON "medi_pregnancy_warnings"("item_seq");

-- CreateIndex
CREATE INDEX "medi_pregnancy_warnings_ingr_code_idx" ON "medi_pregnancy_warnings"("ingr_code");

-- CreateIndex
CREATE INDEX "medi_pregnancy_warnings_type_name_idx" ON "medi_pregnancy_warnings"("type_name");

-- CreateIndex
CREATE INDEX "medi_elderly_cautions_item_seq_idx" ON "medi_elderly_cautions"("item_seq");

-- CreateIndex
CREATE INDEX "medi_elderly_cautions_ingr_code_idx" ON "medi_elderly_cautions"("ingr_code");

-- CreateIndex
CREATE INDEX "medi_elderly_cautions_type_name_idx" ON "medi_elderly_cautions"("type_name");

-- CreateIndex
CREATE INDEX "medi_dose_cautions_item_seq_idx" ON "medi_dose_cautions"("item_seq");

-- CreateIndex
CREATE INDEX "medi_dose_cautions_ingr_code_idx" ON "medi_dose_cautions"("ingr_code");

-- CreateIndex
CREATE INDEX "medi_dose_cautions_type_name_idx" ON "medi_dose_cautions"("type_name");

-- CreateIndex
CREATE INDEX "medi_period_warnings_item_seq_idx" ON "medi_period_warnings"("item_seq");

-- CreateIndex
CREATE INDEX "medi_period_warnings_ingr_code_idx" ON "medi_period_warnings"("ingr_code");

-- CreateIndex
CREATE INDEX "medi_period_warnings_type_name_idx" ON "medi_period_warnings"("type_name");

-- CreateIndex
CREATE INDEX "medi_duplicate_effects_item_seq_idx" ON "medi_duplicate_effects"("item_seq");

-- CreateIndex
CREATE INDEX "medi_duplicate_effects_effect_name_idx" ON "medi_duplicate_effects"("effect_name");

-- CreateIndex
CREATE INDEX "medi_duplicate_effects_ingr_code_idx" ON "medi_duplicate_effects"("ingr_code");

-- CreateIndex
CREATE INDEX "medi_duplicate_effects_sers_name_idx" ON "medi_duplicate_effects"("sers_name");

-- CreateIndex
CREATE INDEX "medi_sr_warnings_item_seq_idx" ON "medi_sr_warnings"("item_seq");

-- CreateIndex
CREATE INDEX "medi_sr_warnings_type_name_idx" ON "medi_sr_warnings"("type_name");

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_qna_id_fkey" FOREIGN KEY ("qna_id") REFERENCES "qnas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "answers" ADD CONSTRAINT "answers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_hpid_fkey" FOREIGN KEY ("hpid") REFERENCES "pharmacies"("hpid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_itemSeq_fkey" FOREIGN KEY ("itemSeq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_times" ADD CONSTRAINT "medi_times_userMediId_fkey" FOREIGN KEY ("userMediId") REFERENCES "user_medis"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_tags" ADD CONSTRAINT "posts_tags_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "posts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts_tags" ADD CONSTRAINT "posts_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qna_tags" ADD CONSTRAINT "qna_tags_qna_id_fkey" FOREIGN KEY ("qna_id") REFERENCES "qnas"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qna_tags" ADD CONSTRAINT "qna_tags_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qnas" ADD CONSTRAINT "qnas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_healths" ADD CONSTRAINT "user_healths_healthId_fkey" FOREIGN KEY ("healthId") REFERENCES "healths"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_healths" ADD CONSTRAINT "user_healths_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_medis" ADD CONSTRAINT "user_medis_itemSeq_fkey" FOREIGN KEY ("itemSeq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_medis" ADD CONSTRAINT "user_medis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_hpid_fkey" FOREIGN KEY ("hpid") REFERENCES "pharmacies"("hpid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_interactions" ADD CONSTRAINT "medi_interactions_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_age_limits" ADD CONSTRAINT "medi_age_limits_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_pregnancy_warnings" ADD CONSTRAINT "medi_pregnancy_warnings_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_elderly_cautions" ADD CONSTRAINT "medi_elderly_cautions_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_dose_cautions" ADD CONSTRAINT "medi_dose_cautions_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_period_warnings" ADD CONSTRAINT "medi_period_warnings_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_duplicate_effects" ADD CONSTRAINT "medi_duplicate_effects_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medi_sr_warnings" ADD CONSTRAINT "medi_sr_warnings_item_seq_fkey" FOREIGN KEY ("item_seq") REFERENCES "medicines"("item_seq") ON DELETE RESTRICT ON UPDATE CASCADE;

